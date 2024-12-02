import{_ as s,c as a,o as n,V as i}from"./chunks/framework.YnO4XY28.js";const b=JSON.parse('{"title":"Prettier","description":"","frontmatter":{},"headers":[],"relativePath":"guide/notes/m-side/prettier.md","filePath":"guide/notes/m-side/prettier.md","lastUpdated":1733062151000}'),e={name:"guide/notes/m-side/prettier.md"},p=i(`<h1 id="prettier" tabindex="-1">Prettier <a class="header-anchor" href="#prettier" aria-label="Permalink to &quot;Prettier&quot;">​</a></h1><p><a href="https://prettier.io/" target="_blank" rel="noreferrer">Prettier</a> 是一款流行的代码格式化工具，旨在通过强制一致的代码风格来提高代码的可读性和可维护性。它支持多种编程语言，包括 JavaScript、TypeScript、HTML、CSS等。</p><blockquote><p>ESLint 保证 JavaScript 代码质量，Prettier 保证代码美观</p></blockquote><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add --save-dev --save-exact prettier</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p><code>.prettierrc.json</code> 配置文件</p><blockquote><p>注意：json文件中不能有注释，这里的注释只是为了了解每个配置的含义</p></blockquote><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 定义配置文件的 JSON 模式，用于验证配置文件的正确性</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;$schema&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://json.schemastore.org/prettierrc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 禁用行尾分号</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;semi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 使用单引号代替双引号</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;singleQuote&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 设置每行代码的最大字符数为 100</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;printWidth&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><code>.prettierignore</code> 忽略文件</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 忽略构建输出目录</span></span>
<span class="line"><span>dist</span></span>
<span class="line"><span>build</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 忽略 node_modules 目录</span></span>
<span class="line"><span>node_modules</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 忽略环境配置文件</span></span>
<span class="line"><span>.env</span></span>
<span class="line"><span>.env.local</span></span>
<span class="line"><span>.env.*.local</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 忽略特定文件类型</span></span>
<span class="line"><span>*.log</span></span>
<span class="line"><span>*.md</span></span>
<span class="line"><span>*.html</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 忽略特定文件夹</span></span>
<span class="line"><span>public</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 忽略特定配置文件</span></span>
<span class="line"><span>package-lock.json</span></span>
<span class="line"><span>yarn.lock</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p><code>package.json</code> 新增运行脚本</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;format&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;prettier --write </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./**/*.{html,css,ts,js,json,md}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>运行脚本</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run format</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="集成-eslint-和-prettier" tabindex="-1">集成 ESLint 和 Prettier <a class="header-anchor" href="#集成-eslint-和-prettier" aria-label="Permalink to &quot;集成 ESLint 和 Prettier&quot;">​</a></h2><p>（1）安装</p><p><code>eslint-plugin-prettier</code> 和 <code>eslint-config-prettier</code> 是两个用于集成 ESLint 和 Prettier 的工具。</p><ul><li><code>eslint-plugin-prettier</code>：这个插件将 Prettier 作为 ESLint 的规则来运行。</li><li><code>eslint-config-prettier</code>：这个配置文件关闭了所有与 Prettier 冲突的 ESLint 规则。</li></ul><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add --save-dev eslint-plugin-prettier eslint-config-prettier</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>（2）配置 <code>eslint.config.js</code></p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 导入 eslint-plugin-prettier 插件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import eslintPluginPrettierRecommended from &#39;eslint-plugin-prettier/recommended&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">export default [</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  eslintPluginPrettierRecommended</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,23),l=[p];function t(r,h,c,d,o,k){return n(),a("div",null,l)}const m=s(e,[["render",t]]);export{b as __pageData,m as default};