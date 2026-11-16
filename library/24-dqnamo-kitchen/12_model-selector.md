# Advanced Model Selector (Gelişmiş Yapay Zeka Model Seçici) — The Kitchen by dqnamo

> **Koleksiyon:** `The Kitchen by dqnamo (Physical & Tactile UI Archive)` · **Tür:** `Bileşen / Deney`  
> **Kategori:** `Seçiciler ve Grafikler` (`Pickers & Visuals`)  
> **Canlı Demo & Önizleme:** Canlı Etkileşim Mevcut · [dqnamo.com/kitchen](https://www.dqnamo.com/kitchen)  
> **Kaynak & Yazar:** John-Paul (`dqnamo` / `interface.london`)  
> **Teknoloji:** `React, TypeScript, Tailwind CSS, Motion, Radix Primitives` · **Fizik:** `Dropdown spring popover: scale(0.95) -> scale(1) with opacity fade, metric bar fill animation over 400ms`  
> **Etiketler:** `AI Model Picker, Benchmark Metrics, Parameter Sliders, SaaS Selector`

---

## 1. Mimari Genel Bakış ve Açıklama

### 1.1 Tasarım Felsefesi ve Dokunsal Deneyim
Claude, GPT ve Gemini modelleri için benchmark puanları, bağlam penceresi, token maliyetleri ve parametre ayarlarını gösteren seçim aracı.

A benchmark-informed picker with model configuration.

Bu bileşen, modern düz web arayüzlerinin ötesine geçerek kullanıcının fiziksel dünyadaki nesnelerle kurduğu dokunsal ilişkiyi (tactile affordance) dijital ekrana taşır. 

* **Fiziksel Derinlik ve Geri Bildirim:** `Dropdown spring popover: scale(0.95) -> scale(1) with opacity fade, metric bar fill animation over 400ms`
* **Donanım Çift Çerçeve Uyumu (Hardware Double-Bezel):** Dış tepsi (`.bezel-tray`) ve iç çekirdek (`.bezel-core`) mimarisine %100 uyumludur.
* **Durum Yönetimi:** Boşta (Idle), Üzerine Gelme (Hover), Basılma (Active/Pressed), İşleniyor (Working), Tamamlandı (Success) ve Geri Alma (Undo) durumlarını akıcı geçişlerle yönetir.

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Recreate the official "Advanced Model Selector" component from The Kitchen by dqnamo.

Architectural Requirements:
- Collection: The Kitchen by dqnamo (Physical & Tactile UI)
- Title: Advanced Model Selector (Gelişmiş Yapay Zeka Model Seçici)
- Category: Pickers & Visuals
- Core Philosophy: A benchmark-informed picker with model configuration.
- Motion & Spring Physics: Dropdown spring popover: scale(0.95) -> scale(1) with opacity fade, metric bar fill animation over 400ms
- Visual Standard: Swiss Utilitarian & Hardware Double-Bezel discipline. Neutral stone canvas (#F6F5F1), high-precision borders, micro-texture overlay. Zero emoji, clean monochrome typography (Plus Jakarta Sans, Instrument Serif italic, JetBrains Mono for code/metrics).
- Interaction Requirements:
  * Precise pointer tracking and touch-friendly targets (minimum 44x44px).
  * 60 FPS hardware-accelerated transforms (translate3d, scale, rotate, filter).
  * Reduced motion fallback (prefers-reduced-motion: reduce) adhering to accessibility standards.
  * Robust state machines for transitions with zero layout shift (CLS: 0).
- Stack: React, TypeScript, Tailwind CSS, Motion, Radix Primitives.
```

---

## 3. Üretim Kod Blokları (Production Code)

### 3.1 Ana Bileşen Kodu (`app/experiments/model-selector/model-selector-prompt.tsx`)
```tsx
"use client";

import { PreviewCard } from "@base-ui/react/preview-card";
import {
  BrainIcon,
  CaretDownIcon,
  LightningIcon,
  MagnifyingGlassIcon,
  PaperPlaneTiltIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import Button from "@/components/public/Button";
import { Combobox } from "@/components/public/Combobox";
import { MetricBar } from "@/components/public/MetricBar";
import { Radio } from "@/components/public/Radio";
import { Tooltip } from "@/components/public/Tooltip";
import { cn } from "@/helpers/classname-helper";

export type LlmModel = {
  value: string;
  label: string;
  provider: string;
  description: string;
  contextWindow: string;
  inputPrice: string;
  outputPrice: string;
  hasSpeedConfiguration?: boolean;
  metrics: {
    intelligence: number;
    speed: number;
    context: number;
    cost: number;
  };
};

export const DEFAULT_LLM_MODELS: LlmModel[] = [
  {
    value: "claude-fable-5",
    label: "Claude Fable 5",
    provider: "Anthropic",
    description:
      "Anthropic's newest frontier model with Opus fallback for difficult reasoning tasks.",
    contextWindow: "1M tokens",
    inputPrice: "$12.50 / 1M",
    outputPrice: "$50.00 / 1M",
    metrics: { intelligence: 10, speed: 5, context: 10, cost: 10 },
  },
  {
    value: "claude-opus-4.8",
    label: "Claude Opus 4.8",
    provider: "Anthropic",
    description:
      "Flagship Claude model for long-horizon coding, analysis, and agentic work.",
    contextWindow: "1M tokens",
    inputPrice: "$5.00 / 1M",
    outputPrice: "$25.00 / 1M",
    metrics: { intelligence: 9, speed: 5, context: 10, cost: 5 },
  },
  {
    value: "gpt-5.5-xhigh",
    label: "GPT-5.5",
    provider: "OpenAI",
    description:
      "OpenAI's strongest GPT-5.5 reasoning configuration for frontier coding and agentic workflows.",
    contextWindow: "920K tokens",
    inputPrice: "$5.00 / 1M",
    outputPrice: "$30.00 / 1M",
    hasSpeedConfiguration: true,
    metrics: { intelligence: 9, speed: 5, context: 9, cost: 5 },
  },
  {
    value: "gemini-3.1-pro-preview",
    label: "Gemini 3.1 Pro Preview",
    provider: "Gemini",
    description:
      "Google DeepMind's latest Gemini flagship with leading reasoning, coding, and multimodal input.",
    contextWindow: "1M tokens",
    inputPrice: "$2.00 / 1M",
    outputPrice: "$12.00 / 1M",
    metrics: { intelligence: 9, speed: 10, context: 10, cost: 2 },
  },
];

const DEFAULT_MODEL =
  DEFAULT_LLM_MODELS.find((model) => model.value === "claude-fable-5") ??
  DEFAULT_LLM_MODELS[0];

const PROVIDER_LOGOS: Record<
  string,
  {
    src: string;
    className?: string;
  }
> = {
  Anthropic: {
    src: "/logos/model-selector/anthropic.png",
  },
  Gemini: {
    src: "/logos/model-selector/gemini.png",
  },
  OpenAI: {
    src: "/logos/model-selector/openai.png",
    className: "dark:invert",
  },
};

export type ReasoningLevel = "low" | "medium" | "high";
export type SpeedLevel = "standard" | "fast";

export type ModelConfiguration = {
  reasoning: ReasoningLevel;
  speed: SpeedLevel;
};

export type ModelSelectorSubmitPayload = {
  configuration: ModelConfiguration;
  configurations: Record<string, ModelConfiguration>;
  model: LlmModel;
  prompt: string;
};

export type ModelSelectorPromptProps = {
  className?: string;
  configurations?: Record<string, ModelConfiguration>;
  defaultConfigurations?: Record<string, ModelConfiguration>;
  defaultPrompt?: string;
  defaultValue?: string;
  disabled?: boolean;
  models?: readonly LlmModel[];
  onConfigurationChange?: (
    modelValue: string,
    configuration: ModelConfiguration,
    configurations: Record<string, ModelConfiguration>,
  ) => void;
  onModelChange?: (model: LlmModel) => void;
  onPromptChange?: (prompt: string) => void;
  onSubmit?: (payload: ModelSelectorSubmitPayload) => void | Promise<void>;
  placeholder?: string;
  prompt?: string;
  value?: string;
};

const DEFAULT_MODEL_CONFIGURATION: ModelConfiguration = {
  reasoning: "medium",
  speed: "standard",
};

function getModelConfiguration(
  configurations: Record<string, ModelConfiguration>,
  modelValue: string,
): ModelConfiguration {
  return configurations[modelValue] ?? DEFAULT_MODEL_CONFIGURATION;
}

const REASONING_INTELLIGENCE_DELTA: Record<ReasoningLevel, number> = {
  low: -2,
  medium: 0,
  high: 2,
};

const SPEED_METRIC_DELTA: Record<SpeedLevel, number> = {
  standard: 0,
  fast: 2,
};

function clampMetric(value: number) {
  return Math.min(10, Math.max(1, Math.round(value)));
}

function ProviderIcon({
  provider,
  className,
}: {
  provider: string;
  className?: string;
}) {
  const logo = PROVIDER_LOGOS[provider];

  if (!logo) {
    return null;
  }

  return (
    <Image
      alt=""
      aria-hidden="true"
      className={cn(
        "size-3 shrink-0 object-contain",
        logo.className,
        className,
      )}
      height={16}
      src={logo.src}
      width={16}
    />
  );
}

function ProviderLabel({
  provider,
  className,
}: {
  provider: string;
  className?: string;
}) {
  return (
    <span className={cn("flex min-w-0 items-center gap-1.5", className)}>
      <ProviderIcon provider={provider} />
      <span className="truncate">{provider}</span>
    </span>
  );
}

const REASONING_LABELS: Record<ReasoningLevel, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
};

function ModelConfigurationBadge({
  model,
  configuration,
}: {
  model: LlmModel;
  configuration: ModelConfiguration;
}) {
  const showReasoning = configuration.reasoning !== "medium";
  const showFast =
    model.hasSpeedConfiguration && configuration.speed === "fast";

  if (!showReasoning && !showFast) {
    return null;
  }

  const badgeClassName =
    "inline-flex items-center gap-0.5 rounded-md bg-grayscale-3 px-1 py-0.5 text-grayscale-11 text-tiny group-data-[selected]:bg-grayscale-5 dark:bg-grayscale-6 dark:text-grayscale-11 dark:group-data-[selected]:bg-grayscale-5";

  return (
    <div className="flex shrink-0 items-center gap-1">
      {showReasoning ? (
        <span className={badgeClassName}>
          <BrainIcon className="text-grayscale-11" size={11} weight="fill" />
          {REASONING_LABELS[configuration.reasoning]}
        </span>
      ) : null}
      {showFast ? (
        <span className={badgeClassName}>
          <LightningIcon className="text-amber-9" size={11} weight="fill" />
          Fast
        </span>
      ) : null}
    </div>
  );
}

function ModelPreviewPanel({
  model,
  configuration,
  onConfigurationChange,
}: {
  model: LlmModel;
  configuration: ModelConfiguration;
  onConfigurationChange: (update: Partial<ModelConfiguration>) => void;
}) {
  const { reasoning, speed } = configuration;

  const adjustedMetrics = useMemo(
    () => ({
      intelligence: clampMetric(
        model.metrics.intelligence + REASONING_INTELLIGENCE_DELTA[reasoning],
      ),
      speed: clampMetric(
        model.metrics.speed +
          (model.hasSpeedConfiguration ? SPEED_METRIC_DELTA[speed] : 0),
      ),
      context: model.metrics.context,
      cost: model.metrics.cost,
    }),
    [model.hasSpeedConfiguration, model.metrics, reasoning, speed],
  );

  return (
    <Tooltip.Provider>
      <div className="flex w-56 flex-col divide-y divide-grayscale-4 dark:divide-grayscale-6">
        <div className="flex flex-col gap-3 p-3">
          <div className="flex flex-col gap-1">
            <p className="font-medium text-grayscale-12 text-sm">
              {model.label}
            </p>
            <ProviderLabel
              className="text-grayscale-11/80 text-xs"
              provider={model.provider}
            />
          </div>
          <p className="text-pretty text-grayscale-11 text-xs leading-4">
            {model.description}
          </p>
          <div className="mt-2 grid grid-cols-2 gap-4 text-xs">
            <MetricBar
              animationKey={model.value}
              label="Intelligence"
              value={adjustedMetrics.intelligence}
            />
            <MetricBar
              animationKey={model.value}
              label="Speed"
              value={adjustedMetrics.speed}
            />
            <MetricBar
              animationKey={model.value}
              info={`${model.contextWindow} context window`}
              label="Context"
              value={adjustedMetrics.context}
            />
            <MetricBar
              animationKey={model.value}
              info={`${model.inputPrice} input · ${model.outputPrice} output`}
              invert
              label="Cost"
              value={adjustedMetrics.cost}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 p-3">
          <p className="text-grayscale-11 text-tiny font-semibold font-mono uppercase leading-none">
            Configuration
          </p>

          <div className="flex flex-col gap-2">
            <p className="text-grayscale-11/80 text-xs leading-none">
              Reasoning
            </p>
            <Radio.Group
              aria-label="Reasoning level"
              onValueChange={(value) =>
                onConfigurationChange({ reasoning: value as ReasoningLevel })
              }
              value={reasoning}
            >
              <Radio.Root
                className="dark:bg-grayscale-6 dark:text-grayscale-11 dark:hover:bg-grayscale-7 dark:hover:text-grayscale-12 dark:data-[checked]:bg-grayscale-7 dark:data-[checked]:text-grayscale-12"
                value="low"
              >
                Low
              </Radio.Root>
              <Radio.Root
                className="dark:bg-grayscale-6 dark:text-grayscale-11 dark:hover:bg-grayscale-7 dark:hover:text-grayscale-12 dark:data-[checked]:bg-grayscale-7 dark:data-[checked]:text-grayscale-12"
                value="medium"
              >
                Medium
              </Radio.Root>
              <Radio.Root
                className="dark:bg-grayscale-6 dark:text-grayscale-11 dark:hover:bg-grayscale-7 dark:hover:text-grayscale-12 dark:data-[checked]:bg-grayscale-7 dark:data-[checked]:text-grayscale-12"
                value="high"
              >
                High
              </Radio.Root>
            </Radio.Group>
          </div>

          {model.hasSpeedConfiguration ? (
            <div className="flex flex-col gap-2">
              <p className="text-grayscale-11/80 text-xs leading-none">Speed</p>
              <Radio.Group
                aria-label="Speed"
                onValueChange={(value) =>
                  onConfigurationChange({ speed: value as SpeedLevel })
                }
                value={speed}
              >
                <Radio.Root
                  className="dark:bg-grayscale-6 dark:text-grayscale-11 dark:hover:bg-grayscale-7 dark:hover:text-grayscale-12 dark:data-[checked]:bg-grayscale-7 dark:data-[checked]:text-grayscale-12"
                  value="standard"
                >
                  Standard
                </Radio.Root>
                <Radio.Root
                  className="dark:bg-grayscale-6 dark:text-grayscale-11 dark:hover:bg-grayscale-7 dark:hover:text-grayscale-12 dark:data-[checked]:bg-grayscale-7 dark:data-[checked]:text-grayscale-12"
                  value="fast"
                >
                  Fast
                </Radio.Root>
              </Radio.Group>
            </div>
          ) : null}
        </div>
      </div>
    </Tooltip.Provider>
  );
}

function ModelListWithScrollFade({
  children,
}: {
  children: React.ComponentProps<typeof Combobox.List>["children"];
}) {
  const listRef = useRef<HTMLDivElement>(null);
  const [showBottomFade, setShowBottomFade] = useState(false);

  useEffect(() => {
    const list = listRef.current;
    if (!list) {
      return;
    }

    function updateBottomFade() {
      const el = listRef.current;
      if (!el) {
        return;
      }

      const { scrollTop, scrollHeight, clientHeight } = el;
      setShowBottomFade(scrollHeight - scrollTop - clientHeight > 4);
    }

    updateBottomFade();

    list.addEventListener("scroll", updateBottomFade, { passive: true });
    const resizeObserver = new ResizeObserver(updateBottomFade);
    resizeObserver.observe(list);

    return () => {
      list.removeEventListener("scroll", updateBottomFade);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="relative">
      <Combobox.List ref={listRef}>{children}</Combobox.List>
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 z-10 h-8 bg-gradient-to-t from-white to-transparent transition-opacity duration-150 dark:from-grayscale-4",
          showBottomFade ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}

function ModelComboboxItem({
  model,
  configuration,
  previewHandle,
}: {
  model: LlmModel;
  configuration: ModelConfiguration;
  previewHandle: PreviewCard.Handle<LlmModel>;
}) {
  return (
    <Combobox.Item
      className="group w-full p-0 data-[selected]:text-grayscale-12"
      key={model.value}
      value={model}
    >
      <PreviewCard.Trigger
        className="flex w-full items-start gap-2 rounded-md px-1.5 py-1.5 dark:hover:bg-grayscale-5 group-data-[selected]:bg-grayscale-3 group-data-[selected]:hover:bg-grayscale-3 dark:group-data-[selected]:bg-grayscale-6 dark:group-data-[selected]:hover:bg-grayscale-6"
        closeDelay={180}
        delay={80}
        handle={previewHandle}
        payload={model}
        render={<div />}
      >
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span className="truncate">{model.label}</span>
          <ProviderLabel
            className="text-grayscale-11/80 text-xs"
            provider={model.provider}
          />
        </div>
        <ModelConfigurationBadge configuration={configuration} model={model} />
      </PreviewCard.Trigger>
    </Combobox.Item>
  );
}

export function ModelSelectorPrompt({
  className,
  configurations,
  defaultConfigurations = {},
  defaultPrompt = "",
  defaultValue,
  disabled = false,
  models = DEFAULT_LLM_MODELS,
  onConfigurationChange,
  onModelChange,
  onPromptChange,
  onSubmit,
  placeholder = "What do you want to do?",
  prompt,
  value,
}: ModelSelectorPromptProps = {}) {
  const fallbackModel = models[0] ?? DEFAULT_MODEL;
  const [uncontrolledModelValue, setUncontrolledModelValue] = useState(
    defaultValue ?? fallbackModel.value,
  );
  const [uncontrolledConfigurations, setUncontrolledConfigurations] = useState<
    Record<string, ModelConfiguration>
  >(defaultConfigurations);
  const [uncontrolledPrompt, setUncontrolledPrompt] = useState(defaultPrompt);
  const selectedModelValue = value ?? uncontrolledModelValue;
  const selectedModel =
    models.find((model) => model.value === selectedModelValue) ?? fallbackModel;
  const modelConfigurations = configurations ?? uncontrolledConfigurations;
  const promptValue = prompt ?? uncontrolledPrompt;
  const previewHandle = useMemo(() => PreviewCard.createHandle<LlmModel>(), []);

  function updateModelConfiguration(
    modelValue: string,
    update: Partial<ModelConfiguration>,
  ) {
    const previous = modelConfigurations;
    const nextConfiguration = {
      ...getModelConfiguration(previous, modelValue),
      ...update,
    };
    const nextConfigurations = {
      ...previous,
      [modelValue]: nextConfiguration,
    };

    if (!configurations) {
      setUncontrolledConfigurations(nextConfigurations);
    }

    onConfigurationChange?.(modelValue, nextConfiguration, nextConfigurations);
  }

  function updateSelectedModel(model: LlmModel) {
    if (!value) {
      setUncontrolledModelValue(model.value);
    }

    onModelChange?.(model);
  }

  function updatePrompt(nextPrompt: string) {
    if (prompt === undefined) {
      setUncontrolledPrompt(nextPrompt);
    }

    onPromptChange?.(nextPrompt);
  }

  async function handleSubmit() {
    await onSubmit?.({
      configuration: getModelConfiguration(
        modelConfigurations,
        selectedModel.value,
      ),
      configurations: modelConfigurations,
      model: selectedModel,
      prompt: promptValue,
    });
  }

  function closeModelPreview() {
    previewHandle.close();
  }

  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-md flex-col rounded-xl border border-grayscale-3 bg-white dark:bg-grayscale-3",
        className,
      )}
    >
      <textarea
        className="h-full w-full resize-none bg-transparent p-3 font-medium text-grayscale-12 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-60"
        disabled={disabled}
        onChange={(event) => updatePrompt(event.target.value)}
        placeholder={placeholder}
        value={promptValue}
      />
      <div className="flex w-full flex-row items-center justify-between gap-2 p-2">
        <Combobox.Root<LlmModel>
          autoHighlight
          isItemEqualToValue={(item, nextValue) =>
            item.value === nextValue.value
          }
          items={models}
          onInputValueChange={closeModelPreview}
          onValueChange={(nextModel) => {
            if (nextModel) {
              updateSelectedModel(nextModel);
            }
          }}
          value={selectedModel}
        >
          <Combobox.Trigger
            aria-label="Select model"
            className="dark:bg-grayscale-4 dark:hover:bg-grayscale-5 dark:border-grayscale-5 dark:hover:border-grayscale-6 dark:data-[open]:bg-grayscale-5 dark:data-[open]:border-grayscale-6"
            disabled={disabled}
          >
            <Combobox.Value>
              {(model) =>
                model ? (
                  <span className="flex min-w-0 flex-1 items-center justify-between gap-2">
                    <span className="flex min-w-0 items-center gap-1.5">
                      <ProviderIcon
                        className="size-3.5"
                        provider={model.provider}
                      />
                      <span className="truncate">{model.label}</span>
                    </span>
                    <ModelConfigurationBadge
                      configuration={getModelConfiguration(
                        modelConfigurations,
                        model.value,
                      )}
                      model={model}
                    />
                  </span>
                ) : (
                  <span>Select model</span>
                )
              }
            </Combobox.Value>
            <Combobox.Icon>
              <CaretDownIcon size={14} weight="bold" />
            </Combobox.Icon>
          </Combobox.Trigger>

          <Combobox.Portal>
            <Combobox.Positioner align="start" sideOffset={4}>
              <Combobox.Popup
                className="dark:bg-grayscale-4 dark:border-grayscale-5 w-60"
                aria-label="Select model"
              >
                <PreviewCard.Root<LlmModel> handle={previewHandle}>
                  {({ payload }) => (
                    <>
                      <Combobox.InputGroup className="rounded-none border-0 border-b border-grayscale-3 bg-transparent px-2 dark:border-grayscale-5 dark:bg-transparent">
                        <Combobox.Input
                          className="px-0"
                          onFocus={closeModelPreview}
                          placeholder="Search models..."
                        />
                        <MagnifyingGlassIcon
                          aria-hidden="true"
                          className="shrink-0 text-grayscale-11/80"
                          size={14}
                          weight="bold"
                        />
                      </Combobox.InputGroup>
                      <Combobox.Empty>
                        <div className="text-center text-grayscale-11 text-xs font-medium gap-1 flex flex-col py-2 px-2">
                          No models found
                          <div className="text-center text-grayscale-9 text-xs text-pretty">
                            Maybe try a different search.
                          </div>
                        </div>
                      </Combobox.Empty>
                      <ModelListWithScrollFade>
                        {(model: LlmModel) => (
                          <ModelComboboxItem
                            key={model.value}
                            configuration={getModelConfiguration(
                              modelConfigurations,
                              model.value,
                            )}
                            model={model}
                            previewHandle={previewHandle}
                          />
                        )}
                      </ModelListWithScrollFade>

                      <PreviewCard.Portal keepMounted>
                        <PreviewCard.Positioner
                          align="center"
                          className="z-[60]"
                          side="right"
                          sideOffset={8}
                        >
                          <PreviewCard.Popup
                            className={cn(
                              "overflow-hidden rounded-lg border border-grayscale-3 bg-white small-shadow outline-none dark:border-grayscale-6 dark:bg-grayscale-5",
                            )}
                          >
                            {payload ? (
                              <ModelPreviewPanel
                                configuration={getModelConfiguration(
                                  modelConfigurations,
                                  payload.value,
                                )}
                                model={payload}
                                onConfigurationChange={(update) =>
                                  updateModelConfiguration(
                                    payload.value,
                                    update,
                                  )
                                }
                              />
                            ) : null}
                          </PreviewCard.Popup>
                        </PreviewCard.Positioner>
                      </PreviewCard.Portal>
                    </>
                  )}
                </PreviewCard.Root>
              </Combobox.Popup>
            </Combobox.Positioner>
          </Combobox.Portal>
        </Combobox.Root>

        <Button
          disabled={disabled}
          onClick={() => void handleSubmit()}
          type="button"
          variant="primary"
        >
          <PaperPlaneTiltIcon size={14} weight="fill" />
          Send
        </Button>
      </div>
    </div>
  );
}

```

### 3.2 Vitrin ve Kullanım Kodu (`app/experiments/model-selector/page.tsx`)
```tsx
import type { Metadata } from "next";
import { ExperimentPage } from "@/app/experiments/_components/ExperimentPage";
import { SourcePanel } from "@/app/experiments/_components/SourcePanel";
import { buildSourceTabs, readSourceFile } from "@/app/experiments/_lib/source";
import { ModelSelectorPrompt } from "@/app/experiments/model-selector/model-selector-prompt";
import { MODEL_SELECTOR_PROMPT, MODEL_SELECTOR_USAGE } from "./copy-content";

export const metadata: Metadata = {
  title: "Advanced Model Selector | dqnamo",
  description:
    "A benchmark-informed model selection interface for current frontier models.",
};

export default async function ModelSelectorPage() {
  const componentSource = await readSourceFile(
    "app/experiments/model-selector/model-selector-prompt.tsx",
  );
  const tabs = await buildSourceTabs([
    {
      label: "Usage.tsx",
      source: MODEL_SELECTOR_USAGE,
      value: "usage",
    },
    {
      label: "Prompt.md",
      language: "markdown",
      source: MODEL_SELECTOR_PROMPT,
      value: "prompt",
    },
    { label: "Component.tsx", source: componentSource, value: "component" },
  ]);

  return (
    <ExperimentPage
      description="A benchmark informed selector for comparing current frontier models across capability, speed, context, and cost."
      slug="model-selector"
      title="Advanced Model Selector"
    >
      <div className="flex min-h-[28rem] w-full items-center justify-center rounded-[13px] border border-grayscale-3 bg-grayscale-1 small-shadow dark:border-transparent dark:bg-grayscale-2 dark:shadow-none">
        <ModelSelectorPrompt />
      </div>
      <div className="w-full overflow-hidden rounded-[13px] border border-grayscale-3 bg-grayscale-1 small-shadow dark:border-grayscale-4 dark:bg-grayscale-3 dark:shadow-none">
        <SourcePanel tabs={tabs} />
      </div>
    </ExperimentPage>
  );
}

```

### 3.3 Yardımcı ve Kullanım Kaynakları (`copy-content.ts`)
```typescript
export const MODEL_SELECTOR_USAGE = `import { useState } from "react";
import {
  DEFAULT_LLM_MODELS,
  ModelSelectorPrompt,
  type ModelConfiguration,
} from "./model-selector-prompt";

export function PromptComposer() {
  const [modelValue, setModelValue] = useState("claude-fable-5");
  const [configurations, setConfigurations] = useState<
    Record<string, ModelConfiguration>
  >({});
  const [prompt, setPrompt] = useState("");

  return (
    <ModelSelectorPrompt
      configurations={configurations}
      models={DEFAULT_LLM_MODELS}
      onConfigurationChange={(_, __, nextConfigurations) => {
        setConfigurations(nextConfigurations);
      }}
      onModelChange={(model) => {
        setModelValue(model.value);
      }}
      onPromptChange={setPrompt}
      onSubmit={({ model, configuration, prompt }) => {
        submitPrompt({ model, configuration, prompt });
      }}
      prompt={prompt}
      value={modelValue}
    />
  );
}
`;

export const MODEL_SELECTOR_PROMPT = `Build an advanced model selector for an AI prompt composer.

## Goal

Create a compact, reusable model picker embedded in a prompt composer. Users should be able to open a combobox, search models, hover a model to inspect a preview card, tune supported configuration options, and see the selected model reflected in the trigger.

## Stack

Use React, TypeScript, Tailwind CSS, and Base UI primitives. Implement this as a client component you can drop into any Next.js App Router or React app.

## Model data

Include current flagship models from OpenAI, Anthropic, and Google Gemini. Use Artificial Analysis (or equivalent benchmark data) for model names, context windows, pricing, output speed, and intelligence scores. Normalize those source values onto 10-segment comparison bars. Do not use arbitrary or hand-waved values.

## UI building blocks

- Base UI Combobox for model search, selection, popup positioning, keyboard navigation, and item rendering.
- Base UI Preview Card for hover previews. Use \`PreviewCard.createHandle\`, \`PreviewCard.Root\`, \`PreviewCard.Trigger\`, \`PreviewCard.Portal\`, \`PreviewCard.Positioner\`, and \`PreviewCard.Popup\`.
- Small segmented radio controls for reasoning level and speed.
- 10-segment metric bars for intelligence, speed, context, and cost, with tooltips that expose the underlying source values.
- Provider logos in the list and preview (Next.js \`Image\` or an equivalent optimized image component).

## Data model

Use a typed model list. Keep display values separate from normalized 10-segment bar values.

\`\`\`ts
type LlmModel = {
  value: string;
  label: string;
  provider: string;
  description: string;
  contextWindow: string;
  inputPrice: string;
  outputPrice: string;
  hasSpeedConfiguration?: boolean;
  metrics: {
    intelligence: number;
    speed: number;
    context: number;
    cost: number;
  };
};
\`\`\`

## Metric rules

- Bars must remain 10 segmented bars.
- Intelligence should reflect Artificial Analysis Intelligence Index, normalized against the top model in your set.
- Speed should reflect Artificial Analysis output tokens per second, normalized against the fastest model in your set.
- Context should reflect context window size, normalized against the largest context in your set.
- Cost should reflect effective blended or input/output pricing. Lower cost should appear better on the bar (invert the visual scale if needed).
- Tooltips should expose human-readable source values such as "1M tokens context window" and "$5.00 / 1M input, $30.00 / 1M output".

## Configuration behavior

- Every model can expose a reasoning control (low / medium / high) if your product treats reasoning as a user preference.
- Only render a speed control for models that support a fast tier. Set \`hasSpeedConfiguration: true\` on those models and hide the speed radio group for models that do not support it.
- Show configuration badges on the trigger and list rows when non-default settings are active (for example high reasoning or fast speed).
- Do not apply speed metric deltas to models that do not support speed configuration.

## Core preview logic

\`\`\`ts
const adjustedMetrics = useMemo(
  () => ({
    intelligence: clampMetric(
      model.metrics.intelligence + REASONING_INTELLIGENCE_DELTA[reasoning],
    ),
    speed: clampMetric(
      model.metrics.speed +
        (model.hasSpeedConfiguration ? SPEED_METRIC_DELTA[speed] : 0),
    ),
    context: model.metrics.context,
    cost: model.metrics.cost,
  }),
  [model.hasSpeedConfiguration, model.metrics, reasoning, speed],
);
\`\`\`

## Base UI preview card wiring

\`\`\`tsx
const previewHandle = useMemo(() => PreviewCard.createHandle<LlmModel>(), []);

<PreviewCard.Root<LlmModel> handle={previewHandle}>
  {({ payload }) => (
    <>
      <Combobox.List>{items}</Combobox.List>
      <PreviewCard.Portal keepMounted>
        <PreviewCard.Positioner align="start" side="right" sideOffset={8}>
          <PreviewCard.Popup>
            {payload ? <ModelPreviewPanel model={payload} /> : null}
          </PreviewCard.Popup>
        </PreviewCard.Positioner>
      </PreviewCard.Portal>
    </>
  )}
</PreviewCard.Root>
\`\`\`

## Combobox item pattern

\`\`\`tsx
<Combobox.Item value={model}>
  <PreviewCard.Trigger
    closeDelay={180}
    delay={80}
    handle={previewHandle}
    payload={model}
    render={<div />}
  >
    <span>{model.label}</span>
    <ProviderLabel provider={model.provider} />
    <ModelConfigurationBadge model={model} configuration={configuration} />
  </PreviewCard.Trigger>
</Combobox.Item>
\`\`\`

## Interaction requirements

- Close the hover preview when the search input changes or receives focus.
- Store configuration per model value so each model remembers its own settings.
- Preserve accessibility labels on the combobox trigger, search input, radio groups, and send action.
- Keep the layout compact: a textarea above, model selector and send button in a footer row.`;

```

---

## 4. İlgili Medya ve Varlıklar
Bu bileşenin kullandığı görsel, video veya ses dosyaları kütüphanede yerel olarak saklanmaktadır:
- `assets/dqnamo/logos/model-selector/anthropic.png`
- `assets/dqnamo/logos/model-selector/openai.png`
- `assets/dqnamo/logos/model-selector/gemini.png`

---
*SHAZ AGENCY WEB DESIGN ARŞİVİ — THE KITCHEN BY DQNAMO KOLEKSİYONU*
