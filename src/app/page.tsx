import { Button } from "@/components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Badge } from "@/components/ui/Badge";

export default function DesignSystemPage() {
  return (
    <main className="container py-8">
      <h1 className="mb-8 text-4xl font-[var(--font-serif)] font-bold">EverDate 设计系统</h1>

      {/* Colors Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-[var(--font-serif)] font-semibold">色彩系统</h2>

        <div className="mb-6">
          <h3 className="mb-3 text-lg font-medium">酒红 (Wine)</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "50", color: "#fef2f2" },
              { name: "100", color: "#fde6e6" },
              { name: "200", color: "#fbd0d0" },
              { name: "300", color: "#f7a8a8" },
              { name: "400", color: "#f07070" },
              { name: "500", color: "#e63e3e" },
              { name: "600", color: "#b91c1c" },
              { name: "700", color: "#991b1b" },
              { name: "800", color: "#7f1d1d" },
              { name: "900", color: "#6b1d1d" },
            ].map((item) => (
              <div key={item.name} className="text-center">
                <div
                  className="h-16 w-16 rounded-lg border border-gray-200"
                  style={{ backgroundColor: item.color }}
                />
                <span className="mt-1 block text-xs">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="mb-3 text-lg font-medium">玫瑰金 (Rose Gold)</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "50", color: "#fdf6f3" },
              { name: "100", color: "#fbe8e0" },
              { name: "200", color: "#f7d5c7" },
              { name: "300", color: "#f2b8a3" },
              { name: "400", color: "#ea9479" },
              { name: "500", color: "#e07456" },
              { name: "600", color: "#cd5a3a" },
              { name: "700", color: "#b7482c" },
              { name: "800", color: "#963c26" },
              { name: "900", color: "#7c3424" },
            ].map((item) => (
              <div key={item.name} className="text-center">
                <div
                  className="h-16 w-16 rounded-lg border border-gray-200"
                  style={{ backgroundColor: item.color }}
                />
                <span className="mt-1 block text-xs">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-medium">奶油白 (Cream)</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "50", color: "#fefdfb" },
              { name: "100", color: "#fdf9f3" },
              { name: "200", color: "#fbf3e8" },
              { name: "300", color: "#f7e8d5" },
              { name: "400", color: "#f2d8bc" },
              { name: "500", color: "#ebc5a0" },
              { name: "600", color: "#dea87a" },
              { name: "700", color: "#c98a5c" },
              { name: "800", color: "#a86f4c" },
              { name: "900", color: "#8a5b40" },
            ].map((item) => (
              <div key={item.name} className="text-center">
                <div
                  className="h-16 w-16 rounded-lg border border-gray-200"
                  style={{ backgroundColor: item.color }}
                />
                <span className="mt-1 block text-xs">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-[var(--font-serif)] font-semibold">字体系统</h2>

        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-lg font-medium">衬线字体 (Serif)</h3>
            <p className="mb-2 text-4xl font-[var(--font-serif)]">Playfair Display / 思源宋体</p>
            <p className="text-sm text-gray-600">用于标题、品牌名称等需要优雅感的场景</p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium">无衬线字体 (Sans-serif)</h3>
            <p className="mb-2 text-4xl font-[var(--font-sans)]">Inter / 系统字体</p>
            <p className="text-sm text-gray-600">用于正文、表单等需要清晰可读性的场景</p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { size: "text-xs", label: "12px" },
              { size: "text-sm", label: "14px" },
              { size: "text-base", label: "16px" },
              { size: "text-lg", label: "18px" },
              { size: "text-xl", label: "20px" },
              { size: "text-2xl", label: "24px" },
              { size: "text-3xl", label: "30px" },
              { size: "text-4xl", label: "36px" },
            ].map((item) => (
              <div key={item.size} className="rounded-lg bg-gray-50 p-3">
                <p className={`${item.size} font-medium`}>Aa</p>
                <p className="mt-1 text-xs text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacing Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-[var(--font-serif)] font-semibold">间距系统</h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { name: "xs", value: "4px" },
            { name: "sm", value: "8px" },
            { name: "md", value: "16px" },
            { name: "lg", value: "24px" },
            { name: "xl", value: "32px" },
            { name: "2xl", value: "48px" },
            { name: "3xl", value: "64px" },
          ].map((item) => (
            <div key={item.name} className="rounded-lg bg-gray-50 p-3">
              <div
                className="rounded bg-[var(--color-primary)]"
                style={{ width: item.value, height: "8px" }}
              />
              <p className="mt-2 text-sm font-medium">{item.name}</p>
              <p className="text-xs text-gray-500">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Components Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-[var(--font-serif)] font-semibold">组件库</h2>

        {/* Buttons */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium">按钮 (Button)</h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">主要按钮</Button>
            <Button variant="secondary">次要按钮</Button>
            <Button variant="outline">轮廓按钮</Button>
            <Button variant="ghost">幽灵按钮</Button>
            <Button variant="danger">危险按钮</Button>
            <Button isLoading>加载中</Button>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <Button size="sm">小号</Button>
            <Button size="md">中号</Button>
            <Button size="lg">大号</Button>
          </div>
        </div>

        {/* Cards */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium">卡片 (Card)</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <Card variant="default">
              <CardHeader>
                <CardTitle>默认卡片</CardTitle>
                <CardDescription>这是默认样式的卡片</CardDescription>
              </CardHeader>
              <CardContent>
                <p>卡片内容区域，可以放置任何内容。</p>
              </CardContent>
              <CardFooter>
                <Button size="sm">操作</Button>
              </CardFooter>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle>阴影卡片</CardTitle>
                <CardDescription>这是带阴影的卡片</CardDescription>
              </CardHeader>
              <CardContent>
                <p>阴影效果让卡片更加突出。</p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="secondary">
                  操作
                </Button>
              </CardFooter>
            </Card>

            <Card variant="outlined">
              <CardHeader>
                <CardTitle>边框卡片</CardTitle>
                <CardDescription>这是带边框的卡片</CardDescription>
              </CardHeader>
              <CardContent>
                <p>边框效果让卡片更加清晰。</p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="outline">
                  操作
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Forms */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium">表单 (Form)</h3>
          <div className="max-w-md space-y-4">
            <Input label="用户名" placeholder="请输入用户名" />
            <Input label="邮箱" type="email" placeholder="请输入邮箱" error="邮箱格式不正确" />
            <Input label="密码" type="password" placeholder="请输入密码" helperText="密码至少8位" />
            <Textarea label="备注" placeholder="请输入备注信息" />
            <Select
              label="城市"
              placeholder="请选择城市"
              options={[
                { value: "beijing", label: "北京" },
                { value: "shanghai", label: "上海" },
                { value: "guangzhou", label: "广州" },
                { value: "shenzhen", label: "深圳" },
              ]}
            />
          </div>
        </div>

        {/* Badges */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium">徽章 (Badge)</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">默认</Badge>
            <Badge variant="primary">主要</Badge>
            <Badge variant="secondary">次要</Badge>
            <Badge variant="success">成功</Badge>
            <Badge variant="warning">警告</Badge>
            <Badge variant="danger">危险</Badge>
          </div>
        </div>
      </section>

      {/* Shadows Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-[var(--font-serif)] font-semibold">阴影效果</h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { name: "sm", shadow: "var(--shadow-sm)" },
            { name: "base", shadow: "var(--shadow-base)" },
            { name: "md", shadow: "var(--shadow-md)" },
            { name: "lg", shadow: "var(--shadow-lg)" },
          ].map((item) => (
            <div
              key={item.name}
              className="rounded-lg bg-white p-4"
              style={{ boxShadow: item.shadow }}
            >
              <p className="font-medium">{item.name}</p>
              <p className="mt-1 text-xs text-gray-500">{item.shadow}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Border Radius Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-[var(--font-serif)] font-semibold">圆角</h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { name: "sm", radius: "var(--radius-sm)" },
            { name: "base", radius: "var(--radius-base)" },
            { name: "md", radius: "var(--radius-md)" },
            { name: "lg", radius: "var(--radius-lg)" },
            { name: "xl", radius: "var(--radius-xl)" },
            { name: "full", radius: "var(--radius-full)" },
          ].map((item) => (
            <div key={item.name} className="bg-gray-100 p-4">
              <div
                className="h-16 w-16 bg-[var(--color-primary)]"
                style={{ borderRadius: item.radius }}
              />
              <p className="mt-2 font-medium">{item.name}</p>
              <p className="text-xs text-gray-500">{item.radius}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
