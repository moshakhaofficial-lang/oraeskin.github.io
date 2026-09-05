import fs from 'fs';
import path from 'path';

const blogDir = path.resolve('src/pages/blog');
const files = fs.readdirSync(blogDir);

let modifiedCount = 0;

const replacements = [
    {
        from: /\| Dermatologist Formulated \|/g,
        to: '| Evidence-Informed Active |'
    },
    {
        from: /Developed in collaboration with dermatologists, this formulation replenishes essential lipids and calms reactive skin\./g,
        to: 'Formulated with barrier-restoring active ingredients, this formulation replenishes essential lipids and calms reactive skin.'
    },
    {
        from: /## Dermatologist Routine Tips for Indian Skin/g,
        to: '## Editorial Routine Tips for Indian Skin'
    },
    {
        from: /In-depth dermatologist review and Amazon India product buying guide\./g,
        to: 'Evidence-informed product review and Amazon India buying guide.'
    },
    {
        from: /Dermatologist-evaluated/g,
        to: 'Evidence-informed'
    },
    {
        from: /dermatologist-approved/g,
        to: 'evidence-informed'
    },
    {
        from: /Dermatologist-approved/g,
        to: 'Evidence-informed'
    },
    {
        from: /dermatologist-tested/g,
        to: 'barrier-safe'
    },
    {
        from: /Dermatologist-tested/g,
        to: 'Barrier-safe'
    },
    {
        from: /The top dermatologist foaming cleansers/g,
        to: 'Top-rated gentle foaming cleansers'
    },
    {
        from: /Dermatologist Reality Check/g,
        to: 'Evidence-Informed Reality Check'
    },
    {
        from: /Dermatologist temperature rules/g,
        to: 'Evidence-based temperature guidance'
    },
    {
        from: /Dermatologist advice/g,
        to: 'Evidence-based guidance'
    },
    {
        from: /Dermatologist barrier technique/g,
        to: 'Barrier-buffering technique'
    },
    {
        from: /dermatologist roadmap/g,
        to: 'evidence-informed roadmap'
    },
    {
        from: /Dermatologist Guide:/g,
        to: 'Editorial Guide:'
    },
    {
        from: /Dermatologist Technique:/g,
        to: 'Application Technique:'
    }
];

for (const file of files) {
    if (!file.endsWith('.md') && !file.endsWith('.astro')) continue;
    const fullPath = path.join(blogDir, file);
    let content = fs.readFileSync(fullPath, 'utf-8');
    let changed = false;

    for (const { from, to } of replacements) {
        if (from.test(content)) {
            content = content.replace(from, to);
            changed = true;
        }
    }

    if (changed) {
        fs.writeFileSync(fullPath, content, 'utf-8');
        modifiedCount++;
    }
}

console.log(`Successfully sanitized claims in ${modifiedCount} blog files.`);
