# EverDate - 纪念日惊喜助手

智能纪念日倒计时与惊喜邮件服务

## 技术栈

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Vitest
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 开发命令

```bash
npm run dev          # 启动开发服务器
npm run build        # 构建生产版本
npm run start        # 启动生产服务器
npm run lint         # 代码检查
npm run lint:fix     # 自动修复 lint 问题
npm run format       # 格式化代码
npm run format:check # 检查代码格式
npm run typecheck    # TypeScript 类型检查
npm run test         # 运行测试
npm run test:watch   # 监听模式运行测试
npm run test:coverage # 运行测试并生成覆盖率报告
```

## 环境变量

复制 `.env.example` 为 `.env.local` 并填入配置：

```bash
cp .env.example .env.local
```

## CI/CD

- **CI**: 每次 push 或 PR 到 main 分支时自动运行 lint、typecheck、format check、test 和 build
- **Deploy**: push 到 main 分支时自动部署到 Vercel

### 部署配置

在 GitHub 仓库设置中添加以下 Secrets：

- `VERCEL_TOKEN`: Vercel API token
- `VERCEL_ORG_ID`: Vercel organization ID
- `VERCEL_PROJECT_ID`: Vercel project ID

## 项目结构

```
EverDate/
├── src/
│   ├── app/           # Next.js App Router 页面
│   ├── components/    # React 组件
│   ├── lib/           # 工具函数和库
│   ├── types/         # TypeScript 类型定义
│   └── __tests__/     # 测试文件
├── .github/
│   └── workflows/     # GitHub Actions 工作流
├── public/            # 静态资源
└── package.json
```

## License

MIT
