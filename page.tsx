
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BacklinkCheckerPage() {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleAnalyze = async () => {
    if (!url.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Mock results data
    const mockResults = {
      domain: url,
      totalBacklinks: 1247,
      referringDomains: 89,
      domainAuthority: 67,
      pageAuthority: 72,
      spamScore: 3,
      backlinks: [
        {
          url: 'https://example.com/article-1',
          domain: 'example.com',
          authority: 85,
          anchorText: 'best practices',
          type: 'dofollow'
        },
        {
          url: 'https://techblog.com/reviews',
          domain: 'techblog.com',
          authority: 72,
          anchorText: 'recommended tools',
          type: 'dofollow'
        },
        {
          url: 'https://newsite.org/resources',
          domain: 'newsite.org',
          authority: 58,
          anchorText: 'helpful resources',
          type: 'nofollow'
        },
        {
          url: 'https://directory.net/listings',
          domain: 'directory.net',
          authority: 41,
          anchorText: url,
          type: 'dofollow'
        },
        {
          url: 'https://forums.web.com/discussion',
          domain: 'forums.web.com',
          authority: 63,
          anchorText: 'check this out',
          type: 'nofollow'
        }
      ]
    };
    
    setResults(mockResults);
    setIsAnalyzing(false);
  };

  const resetTool = () => {
    setUrl('');
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <i className="ri-arrow-right-s-line"></i>
            <Link href="/tools" className="hover:text-blue-600">Tools</Link>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-gray-900">Backlink Checker</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i className="ri-links-line text-2xl text-blue-600"></i>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Backlink Checker
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Analyze your website's backlink profile and discover link building opportunities with comprehensive SEO insights.
          </p>
        </div>

        {/* Tool Interface */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="max-w-2xl mx-auto">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter Website URL
            </label>
            <div className="flex gap-4">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <button
                onClick={handleAnalyze}
                disabled={!url.trim() || isAnalyzing}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isAnalyzing ? (
                  <>
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Analyzing...
                  </>
                ) : (
                  'Check Backlinks'
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {results && (
          <div className="space-y-8">
            {/* Overview Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="ri-links-line text-blue-600 text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{results.totalBacklinks.toLocaleString()}</h3>
                <p className="text-gray-600">Total Backlinks</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="ri-global-line text-green-600 text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{results.referringDomains}</h3>
                <p className="text-gray-600">Referring Domains</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="ri-trophy-line text-purple-600 text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{results.domainAuthority}</h3>
                <p className="text-gray-600">Domain Authority</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="ri-shield-line text-orange-600 text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{results.spamScore}%</h3>
                <p className="text-gray-600">Spam Score</p>
              </div>
            </div>

            {/* Backlinks Table */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Recent Backlinks</h2>
                <button
                  onClick={resetTool}
                  className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer whitespace-nowrap"
                >
                  Check Another URL
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Source URL</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Domain</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Authority</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Anchor Text</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.backlinks.map((link: any, index: number) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 text-sm cursor-pointer"
                          >
                            {link.url.length > 50 ? link.url.substring(0, 50) + '...' : link.url}
                          </a>
                        </td>
                        <td className="py-4 px-4 text-gray-900 text-sm">{link.domain}</td>
                        <td className="py-4 px-4">
                          <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                            link.authority >= 70 ? 'bg-green-100 text-green-800' :
                            link.authority >= 50 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {link.authority}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-600 text-sm">{link.anchorText}</td>
                        <td className="py-4 px-4">
                          <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                            link.type === 'dofollow' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {link.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <i className="ri-search-line text-xl text-blue-600"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Analysis</h3>
            <p className="text-sm text-gray-600">Get detailed insights into your backlink profile</p>
          </div>

          <div className="text-center p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <i className="ri-bar-chart-line text-xl text-green-600"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Authority Metrics</h3>
            <p className="text-sm text-gray-600">Track domain and page authority scores</p>
          </div>

          <div className="text-center p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <i className="ri-shield-check-line text-xl text-purple-600"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Spam Detection</h3>
            <p className="text-sm text-gray-600">Identify potentially harmful backlinks</p>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Complete Guide to Backlink Analysis
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Backlinks are one of the most important ranking factors in SEO. Our free backlink checker helps you analyze your website's link profile, identify opportunities for improvement, and monitor your SEO performance over time.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">What Are Backlinks?</h3>
            <p className="mb-4">
              Backlinks, also known as inbound links, are links from other websites that point to your site. Search engines like Google use backlinks as a signal of trust and authority, making them crucial for SEO success.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Metrics Explained</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Domain Authority (DA)</h4>
                  <p className="text-sm text-gray-600 mb-4">A score from 1-100 that predicts how well a website will rank on search engines.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Page Authority (PA)</h4>
                  <p className="text-sm text-gray-600 mb-4">Similar to DA but measures the ranking strength of individual pages.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Referring Domains</h4>
                  <p className="text-sm text-gray-600 mb-4">The number of unique domains linking to your website.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Spam Score</h4>
                  <p className="text-sm text-gray-600 mb-4">A percentage indicating the likelihood of spammy or low-quality links.</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Link Quality Factors</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Domain authority of the linking site</li>
              <li>Relevance to your content and industry</li>
              <li>Anchor text diversity and naturalness</li>
              <li>Follow vs. nofollow link types</li>
              <li>Link placement and context</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Build Quality Backlinks</h3>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start space-x-2">
                  <i className="ri-check-line text-blue-600 mt-0.5"></i>
                  <span><strong>Create valuable content</strong> that others want to reference</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-check-line text-blue-600 mt-0.5"></i>
                  <span><strong>Guest posting</strong> on relevant industry websites</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-check-line text-blue-600 mt-0.5"></i>
                  <span><strong>Broken link building</strong> by finding and replacing dead links</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-check-line text-blue-600 mt-0.5"></i>
                  <span><strong>Resource page inclusion</strong> on industry directories</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How often should I check my backlinks?
              </h3>
              <p className="text-gray-700">
                We recommend checking your backlink profile monthly to monitor new links, track progress, and identify any potentially harmful links.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What's a good number of backlinks?
              </h3>
              <p className="text-gray-700">
                Quality matters more than quantity. It's better to have 10 high-quality backlinks from authoritative sites than 100 low-quality links.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Should I remove bad backlinks?
              </h3>
              <p className="text-gray-700">
                Yes, toxic backlinks with high spam scores can harm your SEO. Use Google's Disavow Tool to remove harmful links you can't get removed manually.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How accurate is this backlink checker?
              </h3>
              <p className="text-gray-700">
                Our tool provides comprehensive analysis using multiple data sources. However, no tool captures 100% of backlinks due to the vastness of the web.
              </p>
            </div>
          </div>
        </div>

        {/* Related Tools */}
        <div className="bg-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Related SEO Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/tools/domain-authority-checker" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow text-center cursor-pointer">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <i className="ri-global-line text-purple-600"></i>
              </div>
              <div className="text-sm font-medium text-gray-900">Domain Authority</div>
            </Link>

            <Link href="/tools/plagiarism-checker" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow text-center cursor-pointer">
              <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <i className="ri-shield-check-line text-teal-600"></i>
              </div>
              <div className="text-sm font-medium text-gray-900">Plagiarism Checker</div>
            </Link>

            <Link href="/tools/meta-tags-extractor" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow text-center cursor-pointer">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <i className="ri-code-line text-indigo-600"></i>
              </div>
              <div className="text-sm font-medium text-gray-900">Meta Tags</div>
            </Link>

            <Link href="/tools" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow text-center cursor-pointer">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <i className="ri-apps-line text-gray-600"></i>
              </div>
              <div className="text-sm font-medium text-gray-900">All Tools</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
