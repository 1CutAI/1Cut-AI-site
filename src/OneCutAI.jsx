import { useState } from "react";

export default function OneCutAI() {
  const [quantity, setQuantity] = useState(1);
  const unit = 3980;
  const subtotal = unit * quantity;

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-black" />
            <span className="font-semibold tracking-tight">1cut ai</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#offer" className="hover:opacity-70">特徴</a>
            <a href="#samples" className="hover:opacity-70">制作例</a>
            <a href="#process" className="hover:opacity-70">流れ</a>
            <a href="#pricing" className="hover:opacity-70">価格</a>
            <a href="#faq" className="hover:opacity-70">FAQ</a>
          </nav>
          <a href="#cta" className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-medium shadow-sm border border-neutral-900 hover:translate-y-[-1px] transition">今すぐ相談</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              15秒ショート動画を <span className="underline decoration-4 decoration-black">1本3,980円</span> で。
            </h1>
            <p className="mt-5 text-lg text-neutral-600">
              SNSで“引っかかる”ループ動画を、AI×人の手仕上げで素早く。最短<span className="font-semibold">48時間納品</span>、修正は<span className="font-semibold">2回まで無料</span>。
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#cta" className="rounded-2xl bg-black text-white px-5 py-3 text-sm font-medium shadow hover:opacity-90">無料相談（30分）</a>
              <a href="#pricing" className="rounded-2xl border border-neutral-900 px-5 py-3 text-sm font-medium">料金を見る</a>
            </div>
            <div className="mt-6 text-xs text-neutral-500">対応：Instagram Reels / TikTok / YouTube Shorts / X</div>
          </div>
          <div className="relative">
            <div className="aspect-[16/10] rounded-3xl bg-neutral-100 shadow-inner flex items-center justify-center">
              <div className="text-center p-6">
                <div className="text-sm text-neutral-500">サンプル動画（ダミー）</div>
                <div className="mt-2 text-neutral-400 text-xs">ここに埋め込み or ループGIFを配置</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-black text-white text-xs rounded-full px-3 py-2 shadow">最短48h</div>
          </div>
        </div>
      </section>

      {/* Offer */}
      <section id="offer" className="border-t border-neutral-200 bg-neutral-50/60">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">選ばれる理由</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "AI×手仕上げで速い",
                desc: "生成AIで骨子を量産→人の目で磨き、短納期とクオリティを両立。",
              },
              {
                title: "ループに最適化",
                desc: "冒頭0.8秒でフック、最後はシームレスに戻る設計で視聴維持を狙う。",
              },
              {
                title: "明快な定額",
                desc: "1本3,980円。サムネ1枚＋字幕入れ＋BGM/SE込みの基本パッケージ。",
              },
              {
                title: "用途別テンプレ",
                desc: "飲食/美容/物販/イベントなど、成果が出やすい型から素早く制作。",
              },
              {
                title: "権利クリア",
                desc: "商用フリー素材または貴社提供素材で作成。二次利用の範囲も明確に。",
              },
              {
                title: "運用まで伴走",
                desc: "ハッシュタグ/投稿文/投稿タイミングまで提案。運用代行プランも用意。",
              },
            ].map((f, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-sm border border-neutral-200">
                <div className="text-sm font-semibold">0{i + 1}</div>
                <div className="mt-2 text-lg font-semibold">{f.title}</div>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Samples */}
      <section id="samples" className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">制作例</h2>
          <p className="mt-2 text-sm text-neutral-600">※ダミー画像。実例に差し替えてください。</p>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["飲食店の新メニュー告知","物販：新作リリース","イベント告知","サロン：キャンペーン","観光：店舗紹介","教育：講座PR"].map((t, i) => (
              <div key={i} className="group rounded-2xl overflow-hidden border border-neutral-200 bg-white">
                <div className="aspect-[4/5] bg-neutral-100 group-hover:opacity-90 transition" />
                <div className="p-4 text-sm flex items-center justify-between">
                  <div className="font-medium">{t}</div>
                  <button className="text-xs underline">動画を見る</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-t border-neutral-200 bg-neutral-50/60">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">制作の流れ（最短48h）</h2>
          <div className="mt-8 grid md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "ヒアリング", desc: "目的/ターゲット/素材の有無を確認。参考動画があれば共有。" },
              { step: "02", title: "絵コンテ案", desc: "3〜5案から方向性を決定。テキスト/構成のみの簡易版。" },
              { step: "03", title: "初稿制作", desc: "AI生成＋編集で骨子を作成。字幕/SE/簡易テロップを付与。" },
              { step: "04", title: "修正対応", desc: "2回まで無料。細かなタイミング/文言/差し替えに対応。" },
              { step: "05", title: "納品", desc: "mp4（1080×1920）で納品。サムネ画像1枚を同梱。" },
            ].map((p, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-sm border border-neutral-200">
                <div className="text-sm font-semibold">{p.step}</div>
                <div className="mt-2 font-semibold">{p.title}</div>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">価格</h2>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {/* Basic */}
            <div className="rounded-2xl border border-neutral-900 p-6 shadow-sm">
              <div className="text-xs font-semibold tracking-wider uppercase">Basic</div>
              <div className="mt-2 text-3xl font-bold">¥3,980<span className="text-base font-medium text-neutral-500"> /本</span></div>
              <ul className="mt-4 text-sm text-neutral-700 space-y-2">
                <li>15〜20秒 / 9:16縦</li>
                <li>字幕・BGM・SE・簡易テロップ</li>
                <li>サムネイル画像 ×1</li>
                <li>修正2回まで無料</li>
                <li>最短48h納品</li>
              </ul>
              <a href="#cta" className="mt-6 inline-flex rounded-2xl bg-black text-white px-4 py-2 text-sm">このプランで相談</a>
            </div>

            {/* Plus */}
            <div className="rounded-2xl border border-neutral-200 p-6 shadow-sm">
              <div className="text-xs font-semibold tracking-wider uppercase">Plus</div>
              <div className="mt-2 text-3xl font-bold">¥9,800<span className="text-base font-medium text-neutral-500"> /本</span></div>
              <ul className="mt-4 text-sm text-neutral-700 space-y-2">
                <li>絵コンテ精緻化 / 効果音追加</li>
                <li>ロゴアニメ or 軽いモーショングラフィックス</li>
                <li>A/B 変化版 ×2（冒頭フック違い）</li>
                <li>優先48h納品</li>
              </ul>
              <a href="#cta" className="mt-6 inline-flex rounded-2xl border border-neutral-900 px-4 py-2 text-sm">このプランで相談</a>
            </div>

            {/* Monthly */}
            <div className="rounded-2xl border border-neutral-200 p-6 shadow-sm">
              <div className="text-xs font-semibold tracking-wider uppercase">Monthly</div>
              <div className="mt-2 text-3xl font-bold">¥29,800<span className="text-base font-medium text-neutral-500"> /月〜</span></div>
              <ul className="mt-4 text-sm text-neutral-700 space-y-2">
                <li>月8本まで（以降¥3,480/本）</li>
                <li>投稿文・ハッシュタグ提案</li>
                <li>月次レポート（簡易）</li>
              </ul>
              <a href="#cta" className="mt-6 inline-flex rounded-2xl border border-neutral-900 px-4 py-2 text-sm">このプランで相談</a>
            </div>
          </div>

          {/* Simple Estimator */}
          <div className="mt-10 rounded-2xl bg-neutral-50 border border-neutral-200 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="text-sm font-semibold">かんたん見積り</div>
                <div className="text-sm text-neutral-600 mt-1">Basicプランの本数を入力すると概算を表示します</div>
              </div>
              <div className="flex items-center gap-3">
                <label className="text-sm">本数</label>
                <input type="number" min={1} value={quantity} onChange={(e)=>setQuantity(Math.max(1, parseInt(e.target.value||"1")))} className="w-24 rounded-xl border border-neutral-300 px-3 py-2" />
                <div className="text-sm">概算：<span className="font-semibold">¥{subtotal.toLocaleString()}</span>（税抜）</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-neutral-200 bg-neutral-50/60">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">よくある質問</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              {q:"素材がなくても作れますか？", a:"はい。商用利用可のフリー素材や生成画像を活用し、構成から制作します。素材がある場合は品質・納期がさらに安定します。"},
              {q:"修正はどこまで可能？", a:"テロップ・字幕・差し替え・タイミング調整など細部の修正を2回まで無料対応。大幅な構成変更は追加費用でご相談可能です。"},
              {q:"納期の目安は？", a:"初回ヒアリング後、最短48時間。量や混雑状況により前後しますが、事前に目安をお伝えします。"},
              {q:"支払い方法は？", a:"銀行振込またはクレジット（リンク決済）に対応予定です。請求書払い（末締め翌月末）もご相談ください。"},
              {q:"縦以外のサイズも対応？", a:"可能です。1:1 / 16:9 などに最適化した派生書き出しも承ります（オプション）。"},
              {q:"運用代行は？", a:"月額プランで、投稿カレンダー作成・ハッシュタグ最適化・軽いレポーティングまで対応します。"},
            ].map((item, i)=> (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-sm border border-neutral-200">
                <div className="font-medium">{item.q}</div>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="border-t border-neutral-200">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">まずは無料相談から</h2>
          <p className="mt-3 text-neutral-600">用途・目標・参考動画があればURLをお送りください。サンプル1本の試作（静止画ベース）もご相談可。</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:info@trimora.co.jp?subject=1cut%20ai%E7%84%A1%E6%96%99%E7%9B%B8%E8%AB%87&body=%E7%94%A8%E9%80%94%E3%80%81%E6%9C%9B%E3%81%BE%E3%82%8C%E3%82%8B%E7%B5%8C%E7%B7%AF%E3%80%81%E5%8F%82%E8%80%83URL%E3%81%AA%E3%81%A9%E3%82%92%E3%81%94%E8%A8%98%E8%BC%89%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84" className="rounded-2xl bg-black text-white px-6 py-3 text-sm font-medium shadow">メールで相談する</a>
            <a href="https://forms.gle/" className="rounded-2xl border border-neutral-900 px-6 py-3 text-sm font-medium">フォームで相談する</a>
            <a href="https://cal.com/" className="rounded-2xl border border-neutral-200 px-6 py-3 text-sm font-medium">オンライン打合せを予約</a>
          </div>
          <div className="mt-6 text-xs text-neutral-500">営業時間：平日10:00-18:00（JST）／ 運営：Trimora株式会社</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-600 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Trimora Inc. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-80">特定商取引法に基づく表記</a>
            <a href="#" className="hover:opacity-80">プライバシーポリシー</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
