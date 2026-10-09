# iskill-copy-deslop

当用户要给短视频口播稿/带货文案去AI味、改口语、模拟观众反馈，说「这篇太AI了」「改成口语」「帮我看看哪些句子会被划走」时使用。触发词：去AI味、改口语、文案润色、观众点评、模拟观众。处理口播稿场景（网文请用 story-deslop）。产出：口语化改写稿 + 三类问题句清单（听不懂/不相信/想滑走）及改法。

完整用法见 [SKILL.md](SKILL.md)。

> 依赖同步：本仓库含 iskill 共享真源的 vendored 副本（清单见 `package.json` 的 `iskillDeps`），**不要手改**。使用前请同时安装 iskill-dep-sync：对 agent 说「请帮我安装 Skill：aispin/iskill-dep-sync」；用法见 SKILL.md「依赖同步」节。
