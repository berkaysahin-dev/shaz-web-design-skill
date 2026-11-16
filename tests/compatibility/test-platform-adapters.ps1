# Shaz Agency Web Design — Platform Compatibility Test Harness
$ErrorActionPreference = "Stop"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$rootDir = Split-Path -Parent (Split-Path -Parent $scriptDir)

Write-Host "=========================================================="
Write-Host "   SHAZ AGENCY - CROSS-PLATFORM TEST HARNESS (CI/LOCAL)   "
Write-Host "=========================================================="
Write-Host "Repository Root: $rootDir`n"

# Run Node.js structure validation
Write-Host "[STEP 1] Running skill structure validator..."
& node "$rootDir\scripts\validate-skill.js"
if ($LASTEXITCODE -ne 0) {
    Write-Error "Structure validation failed!"
}

Write-Host "`n[STEP 2] Running cross-platform rule integrity tester..."
& node "$rootDir\scripts\check-compatibility.js"
if ($LASTEXITCODE -ne 0) {
    Write-Error "Compatibility check failed!"
}

Write-Host "`n[STEP 3] Running quality gate audit..."
& powershell -ExecutionPolicy Bypass -File "$rootDir\tests\run-quality-audit.ps1"
if ($LASTEXITCODE -ne 0) {
    Write-Error "Quality gate audit failed!"
}

Write-Host "`n=========================================================="
Write-Host "   ALL PLATFORM COMPATIBILITY & QUALITY TESTS PASSED!     "
Write-Host "=========================================================="
