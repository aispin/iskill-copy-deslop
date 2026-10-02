window.PROMO = {
  name: "ISKILL-COPY-DESLOP",
  brand: "#f472b6",
  brand2: "#38bdf8",
  repo: "https://github.com/aispin/iskill-copy-deslop",
  repoLabel: "aispin/iskill-copy-deslop",
  license: "MIT",

  platform: "all",

  lang: {
    /* ── 中文 ───────────────────────────────────────────────────────── */
    zh: {
      meta: {
        title: "ISKILL-COPY-DESLOP · 把「太 AI 了」的稿子改成人在说话",
        description: "先按口播规则去 AI 味改口语，再换三个真实观众视角逐句挑刺：听不懂、不相信、想滑走。产出改后全稿 + 三类问题句清单。"
      },
      a11y: { skip: "跳到主要内容" },
      ui: { copy: "复制", copied: "已复制", failed: "复制失败" },
      nav: { features: "能力", shots: "截图", how: "上手", faq: "问答" },

      hero: {
        badge: "AI 技能",
        titlePre: "把「太 AI 了」的稿子，",
        titleAccent: "改成人在镜头前说话",
        titlePost: "",
        sub: "两个阶段必须先后分开做：先按口播规则去 AI 味改口语，再换三个真实观众视角逐句挑刺——听不懂、不相信、想滑走，每处给「原句 → 为什么 → 改法」。",
        ctaPrimary: "复制安装提示词",
        ctaSecondary: "看源码",
        meta1: "纯提示词",
        meta2: "两阶段分离",
        meta3: "五步工作流第 4 步"
      },
      terminal: {
        title: "deslop — 改口语 + 真人点评",
        lines: [
          [{ t: "$ ", c: "p" }, { t: "这篇口播稿帮我改口语，再模拟观众挑刺", c: "k" }],
          [{ t: "→ ", c: "p" }, { t: "Phase 1 去 AI 味（改最少的字）→ Phase 2 三视角逐句过", c: "" }],
          [{ t: "✓ ", c: "p" }, { t: "v2 全稿已写入 viral-video-team-output/文案/<选题>-口播稿-v2.md", c: "s" }],
          [{ t: "→ ", c: "p" }, { t: "点评：听不懂 1 处 · 不相信 2 处 · 想滑走 2 处，均给改法", c: "" }]
        ]
      },

      stats: [
        { value: "7", label: "口播专属 AI 味特征", note: "排比堆砌 / 总结升华 / 书面词…逐条给对照改法" },
        { value: "3", label: "观众视角", note: "听不懂 / 不相信 / 想滑走" },
        { value: "2", label: "必须分开的阶段", note: "先改口语再点评，混做会边改边护短" },
        { value: "40%", label: "改写比例红线", note: "超过就判定 AI 味过重，建议回上游重生成" }
      ],

      compare: {
        eyebrow: "对比",
        title: "以前 vs 现在",
        sub: "",
        before: { title: "没有这个技能", items: ["稿子书面腔重，读出来像念报告", "自己改容易越改越护短，看不出哪句会被划走", "不知道该怪「听不懂」还是「不相信」"] },
        after: { title: "有了这个技能", items: ["按口播规则改最少的字，保留原来的钩子与数字", "三个观众视角逐句过，每处给原句 → 为什么 → 改法", "输出改前/改后对照 + 完整点评报告"] }
      },

      features: {
        eyebrow: "能力",
        title: "它能做什么",
        sub: "",
        items: [
          { icon: "lang", title: "口播 AI 味对照表", desc: "7 类特征逐条给改法：排比堆砌、总结升华、书面词（赋能/闭环/抓手）等。" },
          { icon: "users", title: "三视角挑刺", desc: "以听不懂 / 不相信 / 想滑走三个真实观众视角逐句检查。" },
          { icon: "check", title: "改最少原则", desc: "只改「怎么说」不改「说什么」，数字、产品名、选题卡给的核心钩子不动。" },
          { icon: "gauge", title: "改写比例红线", desc: "改写超过 40% 判定 AI 味过重，建议回 iskill-viral-copywriter 重生成，别硬改。" },
          { icon: "copy", title: "落盘 v2 全稿", desc: "带段落注释写入 viral-video-team-output/文案/，并给改前改后对照。" },
          { icon: "arrow", title: "接上下游", desc: "上游是文案生成，下游交 iskill-content-precheck 做发布前预检，再进成片。" }
        ]
      },

      showcase: {
        eyebrow: "实拍",
        title: "看一眼真东西",
        sub: "",
        items: []
      },

      steps: {
        eyebrow: "上手",
        title: "三步跑起来",
        sub: "命令由 agent 跑，你只说要什么、看结果。",
        items: [
          { title: "交给 AI 装", desc: "把这句话粘进对话框，agent 会自己拉代码、读文档，再告诉你用法。", codeKey: "install" },
          { title: "把口播稿发过去", desc: "两件事分开说：先改口语，再模拟观众逐句挑刺。", codeName: "prompt", code: "这篇口播稿帮我改口语，再模拟观众挑刺（听不懂 / 不相信 / 想滑走），每处给改法。" },
          { title: "念一遍顺不顺口", desc: "v2 稿和问题句清单直接回在对话里，你念一遍——卡住的地方就是还得改的地方。" }
        ]
      },


      faq: {
        eyebrow: "问答",
        title: "常见问题",
        items: [
          { q: "网文能用它去 AI 味吗？", a: "不能。本 skill 只管口播 / 短文案场景；网文去 AI 味请用 story-deslop（它有脚本检测器和完整 Gate 体系）。" },
          { q: "需要脚本或 API key 吗？", a: "不需要。这是纯提示词技能，装完直接对话即可。" },
          { q: "只想点评、不想改稿怎么办？", a: "可以说「只要点评」，这样会跳过 Phase 1 去 AI 味，直接出点评报告。" },
          { q: "「不相信」类问题它会帮我编数据吗？", a: "不会。涉及产品功效、收益数据的「不相信」问题会标注「需用户补充依据」，不自己编出处。" },
          { q: "口语化会不会加「嗯、呃、对吧对吧」？", a: "不会。加的是有信息量的口语结构（反问、自答、直接称呼「你」），不是口水化的废话词。" },
          { q: "改动比例超过 40% 会怎样？", a: "会提示原稿 AI 味过重，建议回 iskill-viral-copywriter 重新生成，而不是硬改。" }
        ]
      },

      cta: { title: "现在就来一发", desc: "把口播稿粘给 AI，先改口语，再让三个观众挑刺。", primary: "去 GitHub 看看", secondary: "复制安装提示词" },
      footer: { license: "MIT 许可", madeWith: "由 iskill-promo-page 生成" }
    },

    /* ── English ────────────────────────────────────────────────────── */
    en: {
      meta: {
        title: "ISKILL-COPY-DESLOP · Make an “AI-sounding” script sound human",
        description: "First de-slop the script against spoken-word rules, then review it line by line through three real audience lenses: can't understand, don't believe, about to swipe away."
      },
      a11y: { skip: "Skip to content" },
      ui: { copy: "Copy", copied: "Copied", failed: "Copy failed" },
      nav: { features: "Features", shots: "Screens", how: "Get started", faq: "FAQ" },

      hero: {
        badge: "AI skill",
        titlePre: "Make an “AI-sounding” script ",
        titleAccent: "sound like a person on camera",
        titlePost: "",
        sub: "Two phases, done in order: first de-slop and make it colloquial, then review it line by line through three real audience lenses — can't understand, don't believe, about to swipe away — each with original line → why → fix.",
        ctaPrimary: "Copy install prompt",
        ctaSecondary: "View source",
        meta1: "Prompt-only",
        meta2: "Two separate phases",
        meta3: "Step 4 of a 5-step workflow"
      },
      terminal: {
        title: "deslop — rewrite + audience review",
        lines: [
          [{ t: "$ ", c: "p" }, { t: "Make this spoken script colloquial, then role-play the audience and nitpick it.", c: "k" }],
          [{ t: "→ ", c: "p" }, { t: "Phase 1 de-slop (change as little as possible) → Phase 2 three lenses, line by line", c: "" }],
          [{ t: "✓ ", c: "p" }, { t: "v2 written to viral-video-team-output/文案/<topic>-口播稿-v2.md", c: "s" }],
          [{ t: "→ ", c: "p" }, { t: "Review: 1 unclear · 2 unconvincing · 2 swipe-away, each with a fix", c: "" }]
        ]
      },

      stats: [
        { value: "7", label: "spoken-word AI-tell patterns", note: "piled parallelism / summarizing flourishes / jargon… each with a fix" },
        { value: "3", label: "audience lenses", note: "can't understand / don't believe / about to swipe away" },
        { value: "2", label: "phases kept separate", note: "rewrite first, review second — mixing them makes you defensive" },
        { value: "40%", label: "rewrite-ratio red line", note: "above it, the draft is too AI-sounding — regenerate upstream" }
      ],

      compare: {
        eyebrow: "Comparison",
        title: "Before vs after",
        sub: "",
        before: { title: "Without it", items: ["The script sounds written, not spoken — reading it feels like a report", "Editing it yourself makes you defensive; you can't see which line loses viewers", "You don't know whether the problem is clarity or credibility"] },
        after: { title: "With it", items: ["Change the fewest words, keeping the original hook and numbers", "Three audience lenses, line by line, each with original → why → fix", "Before/after diff plus a full review report"] }
      },

      features: {
        eyebrow: "Features",
        title: "What it does",
        sub: "",
        items: [
          { icon: "lang", title: "AI-tell cheat sheet", desc: "7 patterns with fixes: stacked parallelism, summarizing endings, jargon like enabling/closing the loop." },
          { icon: "users", title: "Three-lens review", desc: "Checks every line from three real viewer perspectives: unclear / unconvincing / swipe-away." },
          { icon: "check", title: "Change as little as possible", desc: "Only changes how you say it, not what you say — numbers, product names and the hook stay put." },
          { icon: "gauge", title: "Rewrite-ratio red line", desc: "Over 40% rewritten means the draft is too AI-sounding; regenerate upstream instead of forcing edits." },
          { icon: "copy", title: "Writes the v2 draft", desc: "Saves the annotated v2 to viral-video-team-output/文案/ and shows a before/after diff." },
          { icon: "arrow", title: "Fits the pipeline", desc: "Upstream is copywriting; downstream is iskill-content-precheck, then the video is cut." }
        ]
      },

      showcase: {
        eyebrow: "Screens",
        title: "See the real thing",
        sub: "",
        items: []
      },

      steps: {
        eyebrow: "Get started",
        title: "Up and running in three steps",
        sub: "The agent runs the commands. You say what you want and check the result.",
        items: [
          { title: "Let your agent install it", desc: "Paste the line into the chat — it clones the repo, reads the docs, and tells you how to use it.", codeKey: "install" },
          { title: "Hand over the script", desc: "Ask for the two phases separately: rewrite first, then simulate viewers nitpicking it line by line.", codeName: "prompt", code: "Rewrite this script to sound human, then simulate viewers nitpicking it (confusing / unconvincing / scroll-worthy) — with a fix for each." },
          { title: "Read it out loud", desc: "The v2 draft and the flagged lines come back in chat. Read it aloud — where you stumble still needs work." }
        ]
      },


      faq: {
        eyebrow: "FAQ",
        title: "Frequently asked",
        items: [
          { q: "Can it de-slop web novels?", a: "No. This skill only covers spoken / short copy; for web novels use story-deslop, which has script detectors and a full gate system." },
          { q: "Do I need scripts or an API key?", a: "No. It is a prompt-only skill — install it and just start a conversation." },
          { q: "Can I get the review without a rewrite?", a: "Yes. Say “review only” and it skips Phase 1 and goes straight to the review report." },
          { q: "Will it invent data for “unconvincing” lines?", a: "No. Claims about efficacy or earnings are flagged “needs user-supplied evidence” — it won't make up sources." },
          { q: "Will colloquializing add “um”, “uh”, “right?”", a: "No. It adds informative spoken structures (rhetorical questions, self-answers, addressing “you”), not filler words." },
          { q: "What if the rewrite exceeds 40%?", a: "It flags the draft as too AI-sounding and suggests regenerating with iskill-viral-copywriter instead of forcing edits." }
        ]
      },

      cta: { title: "Give it a spin", desc: "Paste your spoken script into your agent — rewrite for speech, then let three viewers nitpick it.", primary: "Open on GitHub", secondary: "Copy install prompt" },
      footer: { license: "MIT licensed", madeWith: "Built with iskill-promo-page" }
    }
  }
};
