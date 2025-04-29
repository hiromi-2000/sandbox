"use client";

// import Image from "next/image";
import { Button } from "@/ui/components/interactions/Button";
import { Input } from "@/ui/components/interactions/Input";
import { Badge } from "@/ui/components/interactions/Badge";
import { Card } from "@/ui/components/layouts/card";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-base">
      {/* ヘッダー */}
      <header className="sticky top-0 z-10 bg-base-50 border-b border-color shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold">T</span>
            </div>
            <h1 className="text-xl font-bold text-text">Time</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="secondary" size="sm">
              ログイン
            </Button>
            <Button size="sm">新規登録</Button>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 py-12">
        {/* ヒーローセクション */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-text">
                シンプルで使いやすい
                <br />
                <span className="text-primary">タスク管理ツール</span>
              </h2>
              <p className="text-text-light text-lg">
                Timeは、日々のタスク管理をサポートする直感的なツールです。
                シンプルな操作でスケジュール管理が簡単になります。
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Input
                  placeholder="メールアドレスを入力"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                />
                <Button fullWidth>無料で始める</Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-base-100 rounded-xl p-6 shadow-lg border border-color">
                <div className="aspect-video w-full bg-base-50 rounded-lg flex items-center justify-center">
                  <p className="text-text-light">アプリのスクリーンショット</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 特徴セクション */}
        <section className="mb-20">
          <h3 className="text-2xl font-bold text-text mb-8 text-center">
            主な特徴
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "シンプルな操作性",
                description:
                  "直感的なインターフェースで、すぐに使い始めることができます。",
              },
              {
                title: "カスタマイズ可能",
                description:
                  "自分好みのワークフローを作成し、効率的に作業を進めましょう。",
              },
              {
                title: "どこでも使える",
                description:
                  "スマートフォンでもPCでも、いつでもどこでもタスクを管理できます。",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-base-50 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                  <span className="text-primary-700 font-bold">
                    {index + 1}
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-text mb-2">
                  {feature.title}
                </h4>
                <p className="text-text-light">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* プラン紹介セクション */}
        <section className="mb-20">
          <h3 className="text-2xl font-bold text-text mb-8 text-center">
            料金プラン
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "無料プラン",
                price: "¥0",
                features: [
                  "基本機能の利用",
                  "最大3つのプロジェクト",
                  "1週間の履歴保存",
                ],
                buttonText: "始める",
                popular: false,
              },
              {
                name: "スタンダード",
                price: "¥980",
                period: "/月",
                features: [
                  "無制限のプロジェクト",
                  "チーム共有機能",
                  "無制限の履歴保存",
                  "優先サポート",
                ],
                buttonText: "14日間無料トライアル",
                popular: true,
              },
              {
                name: "プロフェッショナル",
                price: "¥2,980",
                period: "/月",
                features: [
                  "すべての機能",
                  "高度な分析ツール",
                  "API連携",
                  "24時間サポート",
                ],
                buttonText: "詳細を見る",
                popular: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`p-6 relative ${plan.popular ? "border-primary shadow-lg" : "bg-base-50"}`}
              >
                {plan.popular && (
                  <Badge variant="primary" className="absolute top-3 right-3">
                    人気
                  </Badge>
                )}
                <h4 className="text-xl font-semibold text-text mb-2">
                  {plan.name}
                </h4>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-text">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-text-light">{plan.period}</span>
                  )}
                </div>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-text-light">
                      <span className="mr-2 text-primary">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "primary" : "secondary"}
                  fullWidth
                >
                  {plan.buttonText}
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* お問い合わせセクション */}
        <section className="bg-base-100 rounded-xl p-8 border border-color">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text mb-4">
              お気軽にお問い合わせください
            </h3>
            <p className="text-text-light mb-6">
              ご質問や機能リクエストなど、お気軽にご連絡ください。
              チームがサポートいたします。
            </p>
            <Button variant="accent">お問い合わせ</Button>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-base-100 border-t border-color mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white font-bold">T</span>
                </div>
                <h1 className="text-xl font-bold text-text">Time</h1>
              </div>
              <p className="text-text-light">
                シンプルで使いやすいタスク管理ツール
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-text mb-4">製品</h4>
              <ul className="space-y-2 text-text-light">
                <li>機能</li>
                <li>料金プラン</li>
                <li>ロードマップ</li>
                <li>リリースノート</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-text mb-4">サポート</h4>
              <ul className="space-y-2 text-text-light">
                <li>ヘルプセンター</li>
                <li>ガイド</li>
                <li>APIドキュメント</li>
                <li>コミュニティ</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-text mb-4">会社情報</h4>
              <ul className="space-y-2 text-text-light">
                <li>会社概要</li>
                <li>ブログ</li>
                <li>採用情報</li>
                <li>プライバシーポリシー</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-color mt-12 pt-6 text-text-light text-center">
            <p>© 2023 Time. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
