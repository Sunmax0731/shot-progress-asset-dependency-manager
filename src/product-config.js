export const productConfig = {
  "product": {
    "rank": 19,
    "tier": "P1",
    "score": 66,
    "domain": "WindowsApp",
    "ideaNo": 20,
    "ideaName": "ショット進捗・素材依存管理",
    "repository": "shot-progress-asset-dependency-manager",
    "publish": "GitHub Release / BOOTH",
    "priorityReason": "VFX小規模制作向けにニッチだが、依存管理と進捗の課題は明確。",
    "surface": "Windows ローカル運用向け CLI と静的 HTML ダッシュボード",
    "integration": "",
    "overview": "連携ツール: After Effects / DaVinci Fusion / Nuke。VFXショットごとの素材、コンポ、レンダー状態、差し替え予定を管理する。",
    "problem": "VFX素材は依存が多く、どのショットが最新か分かりにくい。",
    "differentiation": "小規模制作向けに、ショット状態とDCCファイルを軽量に紐づける。",
    "adobeHost": null,
    "adobeHostReason": null
  },
  "validation": {
    "requiredFields": [
      "id",
      "title",
      "owner",
      "source",
      "status",
      "decision"
    ],
    "recommendedFields": [
      "evidence",
      "notes",
      "tags"
    ],
    "warningStatuses": [
      "pending",
      "needs-review",
      "blocked"
    ],
    "acceptedDecisions": [
      "approved",
      "needs-fix",
      "pending",
      "rejected",
      "cataloged",
      "synced"
    ]
  },
  "qcds": {
    "scale": [
      "S+",
      "S-",
      "A+",
      "A-",
      "B+",
      "B-",
      "C+",
      "C-",
      "D+",
      "D-"
    ],
    "manualTestStatus": "手動テスト未実施",
    "manualTestUpperBound": "S-",
    "ratings": {
      "Quality": "S-",
      "Cost": "S-",
      "Delivery": "S-",
      "Satisfaction": "S-"
    }
  }
};
