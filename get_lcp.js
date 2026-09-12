/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const report = JSON.parse(fs.readFileSync('./lighthouse-report.json', 'utf8'));
const lcpAudit = report.audits['largest-contentful-paint-element'];
if (lcpAudit && lcpAudit.details && lcpAudit.details.items) {
  console.log(lcpAudit.details.items[0].node.snippet);
} else {
  console.log("No LCP node found");
}
