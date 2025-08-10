export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white dark:from-zinc-900 dark:to-zinc-950">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400">
            zzyz guide
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            帮帮酱运营团队
          </h1>
          <p className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-300">
            连接每一位漳籍学子
          </p>
        </div>
      </section>

      {/* 团队简介 */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          团队简介
        </h2>
        <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-7">
          求学指南酱是由漳州一中求学指南团队运营的经验分享平台，致力于成为漳籍学子的求学启明星。
        </p>
      </section>

      {/* 部门介绍（占位） */}
      <section id="departments" className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
              部门介绍
            </h2>
            <span className="text-xs text-zinc-500">内容占位，后续补充</span>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700 p-6">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">宣传部</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                简要描述
              </p>
            </div>
            <div className="rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700 p-6">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">技术部</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                简要描述
              </p>
            </div>
            <div className="rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700 p-6">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">运营部</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                简要描述
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}