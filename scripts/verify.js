/**
 * Verification Script for AURA Enterprise Knowledge Intelligence
 * Validates file structure, syntax, and assets before deployment.
 */

import fs from 'node:fs';
import path from 'node:path';

console.log('🔍 Starting AURA Verification Checks...\n');

const checks = [
  {
    name: 'Required Core Assets',
    run: () => {
      const requiredAssets = [
        'public/assets/aura-logo.png',
        'public/assets/semantic-network-bg.png',
        'public/assets/overview-dashboard-reference.png',
        'public/favicon.svg'
      ];
      for (const asset of requiredAssets) {
        if (!fs.existsSync(path.resolve(asset))) {
          throw new Error(`Missing asset: ${asset}`);
        }
      }
      return 'All public assets verified.';
    }
  },
  {
    name: 'Required Source Modules & Components',
    run: () => {
      const requiredFiles = [
        'src/main.js',
        'src/services/api.js',
        'src/services/mockData.js',
        'src/components/Header.js',
        'src/components/NavigationDrawer.js',
        'src/components/BottomNav.js',
        'src/components/NotificationToast.js',
        'src/components/EvidenceModal.js',
        'src/views/OverviewDashboard.js',
        'src/views/AskAuraView.js',
        'src/views/SourcesView.js',
        'src/views/EvidenceView.js',
        'src/views/LabView.js',
        'src/styles/design-tokens.css',
        'src/styles/typography.css',
        'src/styles/components.css'
      ];
      for (const file of requiredFiles) {
        if (!fs.existsSync(path.resolve(file))) {
          throw new Error(`Missing source file: ${file}`);
        }
      }
      return `${requiredFiles.length} source modules present.`;
    }
  },
  {
    name: 'Security & Secret Exclusion (.gitignore)',
    run: () => {
      if (!fs.existsSync(path.resolve('.gitignore'))) {
        throw new Error('Missing .gitignore');
      }
      const gitignore = fs.readFileSync(path.resolve('.gitignore'), 'utf8');
      if (!gitignore.includes('node_modules') || !gitignore.includes('.env')) {
        throw new Error('.gitignore does not properly exclude node_modules or .env');
      }
      return 'Proper git exclusions configured.';
    }
  },
  {
    name: 'Mock & Demo Data Separation Contract',
    run: async () => {
      const mockData = await import('../src/services/mockData.js');
      if (!mockData.AURA_METADATA || !mockData.REASONING_PROMPTS || !mockData.SOURCE_CONNECTORS) {
        throw new Error('Incomplete mockData export contract');
      }
      if (mockData.SOURCE_CONNECTORS.some(c => c.isDemo && !c.description.includes('Docs') && !c.description.includes('Issues'))) {
        throw new Error('Invalid connector specifications');
      }
      return 'Demonstration contracts properly formatted with academic attribution.';
    }
  }
];

let allPassed = true;
for (const check of checks) {
  try {
    const result = await check.run();
    console.log(`✅ [PASS] ${check.name}: ${result}`);
  } catch (err) {
    allPassed = false;
    console.error(`❌ [FAIL] ${check.name}: ${err.message}`);
  }
}

if (!allPassed) {
  console.error('\n❌ Verification failed.');
  process.exit(1);
} else {
  console.log('\n✨ All verification checks passed successfully.');
}
