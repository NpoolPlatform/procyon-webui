// This is just an example,
// so you can safely delete all default props below

export default {
  menuList: {
    Dashboard: 'ダッシュボード',
    Wallet: 'ウォレット',
    Account: 'アカウント',
    Logout: 'ログアウト',
    Affiliates: 'AFFILIATES'
  },

  drawer: {
    Dashboard: 'ダッシュボード',
    Wallet: 'ウォレット',
    Account: 'アカウント',
    Logout: 'ログアウト',
    Affiliates: 'AFFILIATES'
  },

  notify: {
    Logout: {
      Load: 'ログアウトするまでお待ちください',
      Success: 'ログアウトに成功しました',
      Fail: 'ログアウトに失敗する: '
    },
    Login: {
      Load: '今すぐログイン入力を確認してください、お待ちください',
      Success: 'ログイン成功',
      Fail: 'ログインに失敗する'
    },
    SendEmail: {
      Load: 'メール送信中です、しばらくお待ちください',
      Success: {
        Words1: '認証コードが、',
        Words2: 'へ送信されました。受信のご確認をお願い申し上げます。',
        Check: 'メールをご確認ください'
      },
      Fail: '検証コードの送信失敗'
    },
    SendPhone: {
      Load: '電話メッセージ送信中、お待ちください',
      Success: {
        Words1: '認証コードが、',
        Words2: 'へ送信されました。受信のご確認をお願い申し上げます。',
        Check: '携帯電話のメッセージをご確認ください'
      },
      Fail: '携帯電話へのコード送信に失敗する'
    },
    VerifyWithUserID: {
      Load: '検証をお待ちください',
      Success: '',
      Fail: '入力コードエラー'
    },
    VerifyGoogleAuthentication: {
      Load: '検証をお待ちください',
      Success: 'google認証の確認に成功',
      Fail: 'google認証の確認に失敗する'
    },
    Signup: {
      Load: 'お待ちください',
      Success: 'アカウントの登録が完了しました!',
      Fail: 'アカウント登録の失敗'
    },
    Forget: {
      Load: 'お待ちください',
      Success: '新しいパスワードの設定に成功',
      Fail: '新しいパスワードの設定に失敗する'
    },
    GetGoodDetails: {
      Success: 'プロモーショングッズを無事ゲット',
      Fail: 'プロモーショングッズの入手に失敗した'
    },
    GetDirectAffiliate: {
      Success: 'アフィリエイトリストの取得に成功',
      Fail: 'アフィリエイトリストの取得に失敗する'
    },
    GetUserOrders: {
      Fail: 'ユーザー注文履歴の取得に失敗する'
    }
  },

  header: {
    Home: 'ホーム',
    Blog: 'ブログ',
    Support: 'サポート & FAQ',
    Contact: 'お問い合わせ'
  },

  footer: {
    First: {
      Title: 'Shoot for the stars with Procyon!',
      Content: '暗号資産のグローバルマーケットプレイス'
    },
    Second: {
      Title: 'Links',
      Home: 'ホームページ',
      Products: '商品',
      Blog: 'ブログ'
    },
    Third: {
      Title: 'Help',
      Faqs: 'FAQ',
      Support: 'サポート',
      Legal: '規約'
    },
    Forth: {
      Title: '言語',
      En: 'EN',
      Jp: '日本語'
    }
  },

  button: {
    Register: 'アカウント登録',
    Login: 'ログイン',
    StartMining: '購入',
    SendCode: '送信コード',
    Verify: 'ベリファイ',
    Confirm: '確認',
    Cancel: '取消',
    Export: '履歴のエクスポート(CSV)',
    Purchase: 'ストレージ容量を追加購入'
  },

  input: {
    Password: 'パスワード',
    PhoneNumber: '電話番号',
    ConfirmPassword: 'パスワードを再入力',
    EmailAddress: 'メールアドレス',
    VerifyCode: '認証コード',
    PasswordWarning: '8〜20文字で、数字も含めてください',
    ConfirmPasswordWarning: 'パスワードとパスワードの確認が一致していません',
    OldPassword: '旧パスワード',
    OldPasswordWarning: '旧パスワードを入力してください。',
    PhoneNumberWarning: '正しい電話番号を入力してください',
    EmailAddressWarning: '正しいメールアドレスを記入ください',
    VerifyCodeWarning: '認証コードが違います',
    InvitationCode: '招待コード',
    InvitationCodeWarning: '招待コードが必要です',
    CheckWarning: '同意の上、"アカウント登録"をクリックしてください。',
    Login: {
      Username: 'ユーザー名 / メールアドレス',
      UsernameWarning: '正しいユーザー名／メールアドレスを入力してください'
    }
  },

  dialog: {
    EmailVerify: {
      Title: 'メール認証',
      Content1: '認証コードが、',
      Content3: 'へ送信されました。認証コードのご確認をお願い申し上げます。'
    },
    GoogleVerify: {
      Title: 'Google認証コード',
      Content: 'お客様は、Google認証によるログイン認証を選択しています。Google認証アプリに表示されている認証コードを記入ください。'
    }
  },

  box: {
    PhoneLink: '電話番号の使用',
    EmailLink: 'メールアドレスの使用'
  },

  login: {
    Title: 'ユーザーログイン',
    Forget: 'パスワードを忘れた場合',
    NoAccount: 'アカウントがない場合',
    Register: '今すぐ登録'
  },

  forget: {
    Title: 'パスワードをリセット'
  },

  register: {
    Title: 'アカウント登録',
    Agree1: '',
    Policy: 'プライバシー・ポリシー',
    And: 'そして',
    User: 'ユーザー同意書',
    Behind: 'を読み、同意しました。'
  },

  changePassword: {
    Title: 'パスワードの変更'
  },

  affiliate: {
    Title: 'Affiliate'
  },

  product: {
    DailyMiningRewardsLabel: '日々のマイニング報酬:',
    DailyMiningRewardsValue: 'SMH / 日',
    ServicePeriodLabel: 'サービス期間:',
    ServicePeriodValue: '日',
    TechnicalServiceFeeLabel: '技術サービス料:',
    MaintenanceFeeLabel: 'メンテナンス費用:',
    MaintenanceFeeValue: '日',
    OrderEffectiveLabel: '注文受け付け日:'
  },

  dashboard: {
    Day: '日',
    Column1: {
      Title: 'マイニング報酬',
      Total: 'マイニング報酬合計',
      Yesterday: '昨日のマイニング報酬',
      Current: '残高'
    },

    Column2: {
      Title: 'マイニングダッシュボード',
      Earning: 'マイニング報酬合計',
      Last: '24時間以内に発生した報酬',
      Capacity: 'ストレージ容量',
      DailyOutput: '総マイニング量 (30日間の平均値)',
      TechnicalServiceFee: '技術サービス料',
      NetDailyOutput: '純マイニング量 (30日間の平均値)',
      TotalDaysMining: 'マイニング日数',
      Hashrate: 'ハッシュレート (30日間の平均値)',
      NetworkDailyOutput: 'ネットワークのマイニング量 (30日間の平均値)',
      Export: 'マイニング量のデータを書き出す (CSVデータ)',
      Purchase: 'ストレージ容量を追加購入'
    },

    Column3: {
      Title: '注文履歴',
      Date: '日付',
      Product: '製品',
      Amount: 'TB数',
      Price: '価格',
      Discount: 'ディスカウント',
      Techfee: '技術サービス料',
      Period: 'マイニング期間',
      Total: '合計'
    }
  },

  homepage: {
    Content1: {
      ContentItem1: {
        Title: 'SHOOT FOR THE STARS WITH PROCYON',
        Subtitle: '暗号資産のグローバルマーケットプレイス'
      },
      ContentItem2: {
        Title: 'プレミア製品'
      }
    },

    Why: {
      Title: 'Procyonとは？',
      Content1:
        'Procyonは、ワンストップの多次元な暗号資産グローバルマーケットプレイスの先駆けです。マイニングの',
      Content2: 'ファースト＆セカンドバッチやIDOプラットフォーム',
      Content3: 'など、暗号資産業界における',
      Content4: '広範なネットワークと独自のリサーチ能力',
      Content4Comma: 'により、普通はアクセスすることができない',
      Content5: '',
      Content55H: '独占的な機会',
      Content55: 'をお届けします。',
      Content6: '日本は一人当たりの投資額がアジアで最も高い国です。日本市場は',
      Content7: '多くのグローバルプレイヤーを魅了',
      Content8:
        'していますが、日本には言語や文化の壁があり、グローバル市場から隔絶されているのが現状です。このハードルは、投資の機会損失や商品の多様性の欠如につながります。',
      Content9: 'Procyonは、皆様をグローバルな舞台へと導きます',
      Content9Comma: '。'
    },

    Feature: {
      VCBacking: 'マーケットリーダー',
      VCBackingContent:
        'Procyonのパートナーには、世界トップクラスのベンチャーキャピタルや世界最大のPoCマイニングプールが含まれています。長年の経験から、市場の動向を正確に把握し、綿密なデューデリジェンスを行い、今後のスーパースタープロジェクトをターゲットにして、Procyonコミュニティに商品や情報としてお届けしています。',
      TopTeam: 'ドリームチーム',
      TopTeamContent:
        'Procyonの創業者たちやパートナー企業は、暗号通貨市場で10年以上の経験を持ち、投資利回りが100倍以上のプロジェクトに多数投資してきています。当社の技術チームは5年以上に渡り、1億6千万米ドル以上の資産を管理してきました。基本的に24時間以内に対応し、質の高い、優れたカスタマーサービスを提供することに力を注いでいます。',
      Technology: '全体像',
      TechnologyContent:
        '暗号通貨市場は、研究開発→VCファンド→マイナー→取引所と流れ、最終的にトークンが一般投資家に分配されます。Procyonでは、通常は機関投資家にしか提供されない機会を見つけ出すだけでなく、個人投資家にも機会を提供することを目指しています。富を生み出す独占的なProcyonコミュニティーに参加しましょう！'
    },

    What: {
      Title: 'ファーストバッチマイニングとは？',
      Content1:
        'ファーストバッチマイニングは、メインネットが稼働すると同時に始まります。これは、第一陣のマイナーたちがメインネットでのローンチに先立ち、テストネットを通じて、すでにマイニング調整を完了させており、メインネット稼働と同時に開始されるということは、',
      Content2: 'マイニングの難易度が1番低いタイミング',
      Content2Comma:
        'で開始することを意味します。真っ先にマイニングを開始することで、',
      Content22H:
        'マイニング量が1番高い状態の時に参加することができ、結果としてより大きな投資利回りを得る',
      Content22: 'ことができます。',
      Content3: 'マイニングの投資利回りに影響を与える要素は2つあります。',
      Content4: 'マイニング量',
      Content5: 'トークン価格',
      Content6:
        'マイニング量は、マイニングの難易度に直結します。マイナーが多いほど、ネットワーク全体のハッシュパワーの合計は大きくなり、マイニング難易度が上昇すると、マイナー1人当たりのマイニング量は比例して低くなります。マイニング可能な総供給量は基本的に固定されている為、マイニングに使用されるハッシュパワーが多くなればなるほど、ハッシュパワーの単位（TB）あたりのマイニング量は少なくなります。通常のマイニングに比べて、',
      Content7: 'ファーストバッチマイニングのマイニング量は格段に多いです',
      Content7Comma: '。',
      Content8:
        'ピザをシェアするようなものです。多くの人とシェアすればするほど、1枚1枚のスライスが小さくなります。',
      Content88: '',
      Content88Comma: '',
      Content14:
        'Chiaというプロジェクトがありますが、Chiaのマイニングで事例を話すと、Chiaはメインネット開始後の2カ月からマイニングディフィカルティが急激に上がりました。結果、その後のマイニングできる量が日に日に減っていきました。',
      Content15:
        'Chiaのファーストバッチマイニングに参加したマイナーは、メインネットが開始して最初の数日間で得たマイニング量が、最初の2カ月を過ぎてから参加したマイナーが1年間で得るマイニング量に相当しています',
      Content15Comma: '。',
      Content16: 'これがファーストバッチの威力です。',
      Content9:
        'トークンの価格自体は、市場の影響をダイナミックに受けます。通常、メインネットのローンチと',
      Content10:
        '取引所への上場は同時期に行われることが多く、需要と供給の関係から、注目されているプロジェクトであればあるほど、初期段階にトークンの価格が上昇する可能性が高いです',
      Content10Comma: '。',
      Content11:
        '簡単に言うと、マイニングが早ければ早いほど、より多くのトークンを得ることができ、トークンが取引所に上場し、より高い価格でトークンを売ることができると、結果的に投資利回りが向上します。',
      Content12:
        '通常、ファーストバッチマイニングはプロのマイナーや機関投資家、もしくは経験豊富なマイニングプールでなければ参加することができません。Procyonは、個人投資家もファーストバッチマイニングに参加することを可能にし、より最適なタイミングでの投資機会を提供することを目指したハイエンドなプラットフォームです。',
      Content13: 'Shoot for the stars with Procyon!'
    }
  },

  faq: {
    A: 'サポート',
    B: 'FAQ',
    C: '以下の質問及び回答に該当しない場合は、',
    Contact: 'メールにてお問い合わせください',
    ContactComma: '。',
    Contactt:
      'または、Procyonの公式LINEアカウントを追加の上、お問い合わせください。',
    Header1: {
      Title: 'Procyonのプラットフォームに関して',
      Q6: '「技術サービス料」とは？',
      A6: '技術サービス料は、お客様のマイニングマシンの保守・運用コストを負担するものです。お客様の日々のマイニング報酬から自動的に差し引かれます。',
      Q7: 'Procyonはスマホアプリもありますでしょうか？',
      A7: '将来的には、プラットフォームの公式モバイルアプリを立ち上げる予定がありますが、現段階では、ブラウザベースのウェブサイトで展開しています。ご理解のほどお願い申し上げます。'
    },

    Header2: {
      Title: 'プラットフォームの仕様とトラブル対応',
      Q1: 'Procyonのプラットフォームとは、暗号通貨のウォレットでしょうか？',
      A1: 'はい。マイニングが実装してから日々受け取れるマイニング報酬はすべて、お客様のProcyonダッシュボードに直接入金されます。',
      A11: 'Procyonのプラットフォームのアカウントは、当社のマイニング商品をご購入されることで、お客様専用の口座を開設させて頂きます。',
      Q2: 'マイニング報酬を売却したり、他の暗号通貨に交換することは可能ですか？',
      A2: 'はい、可能です。Procyonのウォレットからお好きな暗号通貨取引所のウォレットへ送金し、ご自由に売買することができます。マイニング報酬はProcyonアカウントのウォレットに日々送金されます。',
      Q3: 'Google認証を使用している、携帯電話を紛失した場合はどうなりますか？',
      A3: 'バックアップコードからアカウントの復元をしていただきます。ユーザーの皆様には、携帯電話の紛失や盗難の際にアカウントを復元できるよう、Googleバックアップコードをオフラインの安全な場所（紙など）に保存することを強く推奨します。ご自身でGoogle認証にアクセスできない場合は、support{\'@\'}procyon.vip にまでメールでお問い合わせください。Google認証をアカウントから解除する手続きをご案内いたします。',
      A4: ''
    },

    Header3: {
      Title: '契約書・お支払い・領収書',
      Q1: '契約期間はいつから始まりますか？',
      A1: 'お申し込み頂いた商品の契約期間は、お客様のマイニングマシンがマイニングを開始した日から契約書に定められた期間までとさせて頂きます。',
      Q2: 'USDT以外の暗号通貨でお支払いしたのですが、Procyonからの契約書と領収書には、なぜUSDTで表記されているのでしょうか？',
      A2: 'BTCやその他の暗号通貨の価格は日々変動が激しいため、価格が米ドルに紐づいている変動しづらいコインUSDT（別名Tether）での支払いとして表記させていただいております。これには、お客様のお支払いの安定性と正確性を保つ意図があります。お客様のお支払い金額に関する具体的なお問い合わせは、',
      A22: 'へご連絡ください。',
      Q3: '「TiB」と「TB」の違いとは?',
      A3: 'TiBとTBは同義で、違いはございません。TiB／TBは、Terabyte (テラバイト) の略であり、コンピューターのハードディスクの容量を表す単位です。ハードディスクを使ってマイニングする暗号通貨、例えばSpacemeshの場合、ストレージパワー（ストレージを使わない暗号通貨のマイニングではハッシュパワーとも呼ばれる）はTiBの単位で測定されます。'
    },

    Header4: {
      Title: 'SpacemeshとSpacemeshマイニングに関して',
      Q1: 'Spacemeshとは？',
      A1: 'Spacemeshは、新しいPoST（proof-of-space-time）コンセンサスプロトコルを採用した、オープンソースのプログラム可能な暗号通貨プラットフォームです。Spacemeshは、Proof-of-Stake（PoS）やProof-of-Work（PoW）プロトコルを使用しないため、膨大なエネルギーの浪費、マイニング中央集権などの問題を回避することができます。',
      A2: 'Spacemeshは、3つの主要な目的を達成するために設計されています。',
      A3: '1.Spacemeshトークン（SMH）のための台帳を作成し、維持すること。SMHは公正な暗号通貨であり、グローバルな決済手段です。',
      A4: '2.SMHの公正で幅広い流通を確保する。',
      A5: '3.トークン化されたアプリ、コミュニティ、経済のためのグローバルなプログラム可能なインフラを確立する。',
      Q2: 'Spacemeshの開発者たちは？',
      A6: 'Spacemeshは、スタートアップ、ブロックチェーン、ベンチャーキャピタル投資において数十年の経験を持つリーダーと開発者からなるトップクラスのチームによって構成されています。共同創業者のTomer AfekとAviv Eyalは、ソニーやTaboolaなどに買収された数多くのスタートアップ・ベンチャーを創業してきました。',
      Q3: '誰がSpacemeshに投資しているのか？',
      A7: '2018年9月、SpacemeshはPolychain Capitalが主導する1,850万ドルの大規模な投資ラウンドを終了し、別のラウンドでは400万ドルを調達し、資金調達額は2,250万ドル以上に達しました。',
      A8: 'Spacemeshの他の注目すべき支援者であるParadigm capitalは、これまでにUniswap、Coinbase、Amber Group (大手暗号資産管理会社) など、大成功を収めたスタートアップや大規模な組織に投資してきました。',
      A9: '2012年からは、Coinbase傘下のVC部門であるCoinbase Venturesが設立され、2021年3月からは、取引高では米国最大、世界第3位の取引所とされています。',
      A10: 'また、2020年6月12日、日本のモバイルゲームおよびベンチャーキャピタル大手の株式会社gumiは、ブロックチェーンに特化した子会社であるgumi Cryptos Capitalを通じて、Spacemeshの親会社Unruly Technologies Ltd.とのパートナーシップを発表し、日本での市場参入を支援するという前代未聞の発表を行いました。',
      Q4: 'Spacemeshのネットワークはいつ正式にスタートしますか？',
      A111: 'メインネットの開始（マイニングの開始）はテストネット次第となります。',
      A112: 'テストネットの最後のバージョンが、そのままメインネットに移行します。',
      A113: 'それまではSpacemeshネットワークにおいてのバグやセキュリティ、信頼性が確保できているかをテストを通して確認し続ける必要があります。',
      A114: 'バグが起これば、再度テストネットのバージョンをアップデートして、また1からテストという具合に、どのテストネットのバージョンが最後のテストネットのバージョンとなり、メインネットに移行するかは誰にも分かりません。',
      A115: '例えばアプリの場合、バグが起きたら、開発側が原因を調べ、バグを修正し、バージョンアップさせます。',
      A116: 'そのようなプロセスと似ています。',
      A117: 'そのため、時期を詳細に確定させることは誰にもできません。テストネットのネットワーク具合次第ですというのが答えとなります。このプロセスはどのマイニングでも同じですので、それを経由して初めてメインネットが開始できます。',
      A118: '現状としては出てくるバグを改善し、バージョンアップを繰り返しています。タイムスケジュールとしてはおそらく1月後半から4月後半というアバウトな答え方しかできず、それも前後する可能性はあることは事前にご認識いただけますと幸いです。',
      A119: '詳しいタイムラインでしだい、随時ご報告させていただきます。',
      A120: 'マイニング報酬に関しては、メインネットが開始し、マイニングが始まれば次の日には着金します。',
      A121: 'おそらく、上場に関してはメインネット開始から1〜2週間以内という予測です。',
      A122: '上場すれば、マイニングできたSMHを上場先に送金すれば利益確定していただけます。',
      Q5: 'いつからSpacemeshのマイニング報酬をもらえますか？',
      A12: 'Spacemeshマイニングの初バッチでTBを購入された方は、Spacemeshのメインネットワークが開始された日から報酬を受け取ることができます。',
      Q6: 'Spacemeshはどの取引所に上場されますか？',
      A13: 'SMHは、Coinbaseが直接投資しているプロジェクトのため、Coinbaseに上場する可能性があると予測されます。また、HuobiやOKExなどの大規模な取引所にも上場されると言われており、Binanceにも上場される可能性は低くはないと思われます。'
    },

    Header5: {
      Title: 'マイニングと暗号通貨の一般事項',
      Q1: 'マイニングとは？',
      A1: '「マイニング 」とは、暗号通貨がどのように生産されるかを表す言葉です。暗号通貨を「採掘」するためには、コンピューターが複雑な数式を解く必要があり、成功することで、コンピューターのオペレーター（マイニングマシンとも呼ばれる）に報酬として暗号通貨が与えられます。',
      A2: '金の採掘と同様に、調達（暗号通貨の場合はコンピューティングパワーやハードディスクスペース）には努力・労力が必要で、供給には限りがあり、マイニングされればされるほど、あるいは同時にマイニングしようとする人が多ければ多いほど、より多くマイニングすることが難しくなります（これを「マイニングディフィカルティ」といい、後述しています）。',
      Q2: 'マイニングプールとは？',
      A3: '「マイニングプール」とは、多数のマイニングマシンを組み合わせて、ブロックチェーン上の「ブロック」を発見する確率を高め、その結果、報酬として暗号通貨を獲得する大規模な暗号通貨マイニングのことです。',
      Q3: 'ブロックとは？',
      A4: '「ブロック」とは、銀行の取引台帳の1ページのようなもので、ブロックチェーン上に過去と現在のすべての取引が記録されており、変更することができない記録のことを意味します。世界中のコンピューターが常にこの取引を記録しており、ブロックが完成することで、マイナーがブロックチェーンの検証を継続するインセンティブとして報酬を得ることができます。',
      A5: '検証能力（ハッシュパワー・ストレージパワーとも呼ばれる）が高ければ高いほど、ブロック報酬を獲得するチャンスが大きくなります。',
      Q4: 'マイニングディフィカルティとは？',
      A6: 'マイニング量は、マイニングの難易度に直結します。マイナーが多いほど、ネットワーク全体のハッシュパワーの合計は大きくなり、マイニング難易度が上昇すると、マイナー1人当たりのマイニング量は比例して低くなります。マイニング可能な総供給量は基本的に固定されている為、マイニングに使用されるハッシュパワーが多くなればなるほど、ハッシュパワーの単位（TB）あたりのマイニング量は少なくなります。 通常のマイニングに比べて、ファーストバッチマイニングのマイニング量は格段に多いです。 ピザをシェアするようなものです。多くの人とシェアすればするほど、1枚1枚のスライスが小さくなります。',
      Q5: '仮想通貨のウォレットとは？「コールドウォレット」とは？2つの違いは？',
      A7: '暗号通貨の「ウォレット」とは、暗号通貨を保管・管理するオンライン上の財布のことであり、自身のポッケの中の財布に不換紙幣の現金を保管するのと同じです。通常のオンライン・ウォレットは「ホットウォレット」と呼ばれ、暗号通貨をオンラインで保管・管理します。「コールドウォレット」（ハードウェアウォレット）は、オフラインで暗号通貨を保管する物理的なデバイスです。オンラインの 「ホット ウォレット」よりかは安全と言われていますが、物理的な「コールドウォレット」を破損や紛失したりした場合、保管・管理していた暗号資産は永遠に失われてしまいます。これは、財布を紛失したことと同じ状況です。',
      Q6: 'テストネットとは？正式なローンチ前なのになぜ重要なのですか？',
      A8: 'テストネットとは、ブロックチェーンプロジェクトの初期段階に公開されるソフトウェアの "ベータ(β)"バージョンです。このテストネットは、小規模なコアユーザーによって実装されており、プロジェクトに対して技術的なフィードバックを提供する重要な役割を果たします。新しいブロックチェーンプロジェクトの安定性やセキュリティ、性能を保証するためにテストネットは不可欠です。テストネットが特定の品質基準を満たした際、プロジェクトはメインネットで正式にローンチされます。'
    }
  },

  legal: {
    Title1: 'Procyon — PRCN Technology',
    Title2: '利用規約',
    P1: 'このサイトはProcyonと外部サービスプロバイダーにより運営されています。当サイトにアクセス、内容閲覧、ユーザー登録、当サイトからいかなる資料のダウンロード、あるいは当サイトから提供された資料を使う場合、下記の条項を遵守することに同意するものと見なします。これらの条項はProcyonとユーザーの間の合意を構成します。これらの条項を遵守することに同意しない場合は、当サイトを使用できません。Procyonは通知なしにいつでも下記の条項を更新する権利を保有しています。これらの更新内容についても、あなたは遵守しなければなりません。いかなる時間、場合においても、Procyonはあらゆるユーザーのアクセス・利用を拒否する権利があります。Procyonは規約などに関して随時訂正、修正、更新する権利を保有します。',
    H1: '1. 著作権に関する声明',
    P2: 'Procyonは独立してこのウェブサイトの関連ページ内すべての資料の著作権を持っています。あるいは当ウェブサイトの関連ページ内の資料の提供者と共同でこのホームページ内の資料の著作権及び、ウェブサイトの使用権を持っています。Procyonの明確な書面許可なしに、当サイト上のいかなる内容に対しても複製または非Procyon所属のサーバー上でミラーリングをしてはいけません。',
    P3: '当サイトに掲載されているドメイン名、商標、文字、映像および音声コンテンツ、図および画像は、いずれも関連商標と著作権の法的保護を受けています。Procyonから事前に書面で明確な許可を得てない限り、いかなる企業あるいは個人もいかなる形式で複製または伝達してはいけません。本サイトを無許可で使用する行為はすべて「セーシェル共和国著作権法」、「セーシェル共和国商標法」及びその他関連法律法規及び国際条約に関する規定に違反します。',
    H2: '2. 利用者の情報およびプライバシーに関する権利の保護',
    P4: '弊社はユーザーのプライバシーを尊重し、ユーザーの同意なしに、ユーザーの情報を収集したり、ユーザーのプライバシーを侵害する疑いのある内容を漏らしません。サービスの必要に応じて把握したユーザー名、電子メール、情報、住所などについては、ユーザーの許可なしに、いかなる第三者にも販売または提供しないことを承諾します。Procyonはユーザーが当サイトに登録したいかなる資料も公開しませんが、下記の場合を除きます。',
    U1: {
      L1: '1. 裁判所、仲裁機関の裁判または裁決、その他の司法手続の要求に従う場合。',
      L2: '2. 関連政府主管部門の要求に従う場合。',
      L3: '3. 利用者が使用規約の規定に違反し、またその他マイニングマシン賃貸プラットフォームの利益を損なう行為に対応する場合。',
      L4: '4. その他法律法規に関する要求へ対応する場合。'
    },
    P5: 'ユーザーが当サイトへの登録をしてから、Procyonが提供できるサービスを利用する場合、以下の事項に同意したと見なします。当サイトのサービス登録表の提示に従って、ご本人の真実、正確、最新及び完備した資料を提供してください。登録資料を随時更新して、真実、正確、最新かつ完全な資料であることを確認してください。もし何かの間違いのある、虚偽、過去の不完全または誤解のある資料を提供した場合、または当サイトは上記の資料が間違いのある、虚偽、過去の不完全または誤解のある資料と疑われる理由がある場合、当サイトはユーザーのアカウントを一時停止または停止する権利があります。また、当サイトが提供された現在および未使用のサービスの全部または任意の部分の提供を拒否できます。',
    H3: '3. 商標およびドメイン名に関する声明',
    P6: 'Procyonウェブサイト（www.procyon.vip）使用しているすべてのProcyonの図案及び文字の商標は、中国または他の国におけるProcyonの登録商標または合法的に使用された商標であり、Procyonから書面による明確な許可を得ていない限り、いかなる単位または個人もいかなる方式で上記の商標を使用してはいけません。Procyonサイトのドメイン名はProcyonの所有です。Procyonの書面による許可を受けていない限り、いかなる単位または個人も使用してはいけません。',
    H4: '4. サイトへのリンク',
    P7: '本サイトへのリンクをご希望の場合は、ご連絡ください。Procyonの書面許可を得てから、当サイトにリンクできます。リンクを確立した後、例えばProcyonが客観的状況によってリンクに適しないと判断した場合、リンクの許可を取り消す権利があります。当サイトにリンクする際は、必ずテキストリンク（Procyonの書面許可がない場合は、Procyonの図案及び文字のリンク方式を使用してはいけません）を使用してください。当サイトのリンクをクリックして新規ウィンドウに表示する形式に設定します。リンク先サイトの枠組みの中に表示することはできません。',
    H5: '5. 責任免除',
    P8: 'お客様は、いかなる状況においても、マイニングマシン賃貸プラットフォームは以下の各事項について責任を負わないことに同意します。',
    U2: {
      L1: '（1）取引の損失；',
      L2: '（2）取引利益または契約損失。',
      L3: '（3）業務の中断；',
      L4: '（4）情報の損失；',
      L5: '（5）データの破損または損失；',
      L6: '（6）ハッシュレートがなくなったり、市場から退出したりする場合。',
      L7: '（7）政策要因による損失。',
      L8: '（8）不可抗力による損失。'
    },
    P9: 'Procyonは創業以来、BTCマイニング業界へのサービス提供に力を入れており、マイニングマシンの調達からメンテナンス、ファームの展開、収益の交換まで、あらゆるサービスを提供しています。創業から今日の正式運用に至るまで、クラウドパワーマイニングサービスは、「利益の部分的な分配を拒否し、コンピューティングパワーの透明な運用を行う」という投資哲学に基づいており、この革新は、顧客に質の高いアルゴリズム取引サービスを提供し、その利益を最大化します。世界最高のコンピューティングパワーサービスプラットフォームを構築することを目指しています。',
    P10: 'Procyon Webサイトにログインまたは使用（直接および間接使用を含む）は、この声明を受け入れて承認したものと見なされます。本声明の内容はセーシェル共和国の関連法律に基づき締結され、本声明の内容はセーシェル共和国の関連法律に基づいて解釈、適用されます。',
    H6: 'プライバシーポリシー',
    H7: 'プライバシーポリシー',
    P11: '私たちはユーザーとウェブサイトの訪問者（総称して「お客様」といいます）のプライバシーを尊重し、オンラインのプライバシーを守るために最善を尽くします。このプライバシーポリシーはProcyonとその関連組織（以下、「Procyon」または「私たち」という）の管理、収集、維持、処理のユーザー個人データの流れを概説しています。当社はプライバシーポリシーの更新・変更がある場合、登録したユーザーにメールにてお知らせします。このプライバシーポリシーを定期的に確認して変更を知ることをお勧めします。本プライバシーポリシーの変更がある場合、このページを公開する際に有効となります。',
    H8: '1. 情報収集',
    P12: '私たちはお客様の個人データを使って、Procyonからお客様に提供されたマイニングマシン共有サービス（「サービス」）を提供し、使用体験を改善していきます。「個人データ」とは、識別された人または識別可能な人に関する任意の情報をいいます。サービスを利用するためにアカウントを作成すると、お客様が提供した情報を内部データベースで管理します。また、Cookie、ピクセルタグ、ローカルストレージ（ブラウザネットワーク記憶またはアプリケーションデータキャッシュ、データベース、サーバログ等）を含む様々な技術を使用して情報を収集し、記憶しています。サービスまたは当サイトをご利用いただくと、このプライバシーポリシーに従って情報を収集し利用することに同意するということです。このプライバシーポリシーに別の規定がない限り、本プライバシーポリシーで使用される用語は私たちのサービス規約と同じ意味を持っています。',
    H9: '1.1 登録',
    P13: 'アカウントを作成するには、メール、電話、パスワードなどのデータを提供する必要があります。上記の情報の提供を拒否すると、サービスを提供することができません。',
    H10: '1.2 支払情報',
    P14: 'お客様の支払情報は第三者支払処理者に送信され、お客様の使用は許可されたものとみなされます。私たちはお客様の暗号化されたウォレットのアドレスを保存できます。当社はお客様のアカウント内の暗号通貨ウォレットのアドレスを保存することができます。また、当社の第三者支払処理者を通じてユーザー情報を保存します。',
    H11: '1.3 ログイン情報',
    P15: 'Procyonは、お客様がアカウントを登録する際に、ブラウザから得た情報を収集します。このデータには、以下の情報が含まれています。お客様のコンピューターやスマートフォンのインターネットプロトコル（IP）アドレス、ブラウザの種類、ブラウザのバージョン、お客様がアクセスしたページ、アクセス時間、日付、これらのページの滞在時間と他の統計データがあります。また、Google Analyticsなどの第三者サービスを使って、このような情報を収集、監視、分析し、サービスの機能性を向上させることができます。これらの第三者サービスプロバイダーは自身のプライバシーポリシーが存在し、情報の使い道を説明しています。これらの第三者サービスプロバイダーは、当社が任務を遂行するために必要な際にのみ、お客様の個人データを表示することができます。',
    H12: '1.4 お客様の情報の使用用途',
    P16: 'お客様が提供した個人情報は、次の目的の為に使われる可能性があります。',
    U3: {
      L1: '（1）当社のウェブサイトとウェブサイトの一部として表示するため',
      L2: '（2）当社のシステムのユーザーとして識別するため',
      L3: '（3）注文処理のため',
      L4: '（4）カスタマーサービスを提供するため',
      L5: '（5）ご要望にお応えするため',
      L6: '（6）製品のアップデートを提供するため',
      L7: '（7）当社のウェブサイトを改善するため',
      L8: '（8）当社の製品に関するニュース通信、調査、特恵及びその他の宣伝資料を送るため',
      L9: '（9）お客様とコミュニケーションをとるため',
      L10: '（10）リスクを管理し当サイトを保護するため。当社のサービスとお客様を詐欺行為から守るため',
      L11: '（11）適用されるすべての法律と法規を遵守し、本サイトとProcyonのサービス改善を実行するため',
      L12: '（12）その他、お客様の同意を得た目的に使用します'
    },
    hh1: '1.5 Cookieに関する情報',
    pp1: 'より良いウェブサイトアクセス体験を提供するため、当社は「Cookie」を使用して、このウェブサイトがお客様のブラウザを識別し、ユーザーの好みやその他の情報を保存することができます。ブラウザの追加サービスが許可されている場合は、Cookieの許容度を変更したり、Cookieを拒否することができます。詳細についてはAboutCookies.orgをご参考ください。ただし、場合によっては当社のウェブサイトを訪問する体験に影響を与える可能性があります。あるいは、当社の一部のサービスを利用できない可能性もあります。',
    hh2: '2. 第三者サービスプロバイダ',
    pp2: '第三者サービスプロバイダーを採用して業務関連のサービスを提供する可能性があります。第三者は、サービスを提供している間のみ、お客様の個人データにアクセスすることができ、情報漏れを徹底的に防止し、他の目的で使用してはいけない義務があります。ただし、当社は第三者のサービスプロバイダーにお客様の個人データを提供する行為は、第三者のサービスプロバイダーのユーザー情報に対する権利侵害またはプライバシー侵害行為に対していかなる法的責任を負うものとはみなされません。',
    hh3: '3. ヨーロッパ経済区（EEA）の住民のお客様',
    pp3: 'お客様がヨーロッパ経済区（EEA）の住民である場合、適用の法律法規に基づいて特定のデータ保護権利があります。当社の目標は合理的な措置を取り、修正、削除、または制限することです。お客様が、当社が保有している個人情報をシステムから削除したい場合、当社にご連絡ください。ただし、当社はヨーロッパ経済区（EEA）の住民のデータ操作に対して、いかなる法的責任は負いません。',
    hh4: '4. 情報セキュリティ',
    pp4: '当社はウェブサイトとそれに紐づくサービスを保護することに力を尽くしていますが、お客様にも個人情報の安全を守る責任があり、お客様の個人情報が正確で最新のものであるかを確認します。当社は、許可なしにお客様のアカウントにアクセスするのを防ぐ必要があります。公共の場の共有コンピューターを使用する場合は、必ずログアウトすることを推奨します。また、許可されていない方にアカウントのパスワードと他のアカウントの登録情報を開示しなようご注意ください。',
    pp5: 'しかし、インターネットを介して伝送される方法や電子記憶方法は100%安全ではありません。したがって、お客様の個人情報を守るために最善を尽くすとともに、絶対的な安全性を保証することはできません。当社はお客様が当社のウェブサイトの登録で提供する情報、または当社のサービスを通じての個人情報の安全性を保証することができません。',
    hh5: '5. 国際データ転送',
    pp6: 'お客様の情報を提出することによって、お客様の情報（個人データを含む）がお客様の国/地域の管轄範囲外のコンピュータとシステムに転送され保存される可能性があります。もしこのような転送が発生したら、お客様の情報がお客様の国/地域の規定のレベルとほぼ同じように保護されていることを確認します。しかし、当社はこの保護行為の結果に対して法的責任を負うことができません。',
    hh6: '6. 第三者リンク',
    pp7: '当社のサービスには、当社が運営していない第三者のウェブサイトへのリンクが含まれている場合があります。お客様がそのようなリンクをクリックした場合、関連する第三者のウェブサイトに移動することもあります。本プライバシーポリシーは、他の第三者のウェブサイトには適用されません。訪問先のウェブサイトのプライバシーポリシーを確認することをお勧めします。当社は、第三者のウェブサイトやそのサービス内容、プライバシーポリシーを管理することはできず、一切の責任を負いません。',
    hh7: '7. 未成年のプライバシー保護',
    pp8: '当社は、故意に18歳以下の方の個人情報を収集、保有することはありません。さらに当社のウェブサイトは、16歳以下の方を対象とするものではありません。18歳未満、または満18歳以上で自身の労働収入を主な収入源としない場合は、いかなる方法でこのサイトを使用したり、アクセスしたりしないようお願いします。当社は、18歳以下の方の個人情報を収集していると把握した際、法律適用法規によって削除、または他の適切な措置を取ります。',
    hh8: '8. 個人データの使用目的の変更',
    pp9: '当社は、お客様の個人データを本プライバシーポリシー宣言以外のいかなる目的に使う場合、お客様に通知し、また有効な退出方法を提供します。本プライバシーポリシーの規定外の目的に自身の個人データを使用できないようします。',
    pp10: '当社は、新サービスと今後の活動に関するメールを送る可能性があります。送信されたメールの中から「購読キャンセル」機能を選択して、Procyonの定期メールの受信を拒否することもできます。しかし、サービスを利用することに同意したユーザーは、本サービスに関する他の重要なメールを引き続き受信することを推奨します。',
    hh9: '9. 情報保存期間',
    pp11: '適用される法律および規制によって要求されない限り、当社は、本プライバシーポリシーに記載された目的を実現するために必要な期間内でのみ、お客様の個人情報を保管および保存します。法律で認められている状況下で、当社は、記録保持を目的として、または法的手段により当社の権利と利益を保証するために、特定の個人情報を保存することがあります。当社による情報の保存および保管は、関連する法律および規則の要件に従って行われ、当社は情報の保存行為についていかなる法的責任も負いません。',
    hh10: '10. お客様の個人情報を理解、取得、変更または削除する方法',
    pp12: '当社がお客様のデータを処理していることの確認、当社が保有しているお客様の個人情報へのアクセス、当社が収集したお客様の個人情報の変更または削除を希望される場合は、本プライバシーポリシーに記載されている連絡先にてご連絡ください。',
    hh11: '11. 連絡方法',
    pp13: '本プライバシーポリシーに対してのご質問がある場合、',
    pp133: 'へお問い合わせください。',

    hhh1: 'サービス利用規約',
    hhh2: 'Procyonのアカウント登録サービス規約',
    ppp1: '登録サービス規約（以下「本規約」という）は、Procyonの各サービスについてユーザーとProcyonが締結した関連権利義務規範です。ユーザーは、本サイトを訪問し、または利用することによって、本規約のすべての条件と条項を受け入れ、拘束されることに同意したことになります。Procyonは自身の判断のみにより、任意の時点でこれらの利用条項を変更および修正する権利を保留します。新しい利用規約はホームページが更新・公開された際に適用され、ユーザーはいつでも容易に利用規約を閲覧できるよう構築されています。',
    hhh3: 'サービス内容',
    ppp2: '1. Procyonは自社システムを利用し、ユーザーにマイニングマシンのレンタルと委託管理及びインターネットを活用した新しいサービスを提供します。',
    ppp3: '2. ユーザーが提出した登録書類について、ユーザーは：（1）合法、真実、正確、詳細な個人資料を提供する；（2）内容に変更がある場合、適時に登録書類を更新する。ユーザーが真実、正確かつ完全でない情報を提供した場合、当社は、当社の判断に基づき、お客様との取引の全部もしくは一部を停止し、または登録を抹消することがあります。これにより生じた損害については、当社は一切責任を負わないものとします。',

    he1: 'ユーザーの権利',
    pa1: '1. 利用者のユーザー名、パスワードと安全性：（1）ユーザーはProcyonの登録について選択する権利があり、Procyon登録ユーザーになる場合、自分で口座を作ることができます。ユーザー名の命名と使用は関連法律法規を遵守し、ネットワークコンプライアンスに適合しなければなりません。口座にはいかなる侮辱、脅威、猥褻、罵倒など他人の合法的権益を侵害する文字を含むことはできません。（2）ユーザーが登録に成功すれば、Procyonの登録ユーザーとなり、アカウント（携帯番号またはメールアドレス）とパスワードを取得し、口座とパスワードでシステムに登録した後に発生したすべての活動とイベントに対して責任を負い、口座を使用時言語、行為などの直接または間接による法的責任を負う。（3）ユーザーはProcyonのアカウントとパスワード、ショートメッセージの検証コード、Googleの検証コードを適切に保管する義務があり、ユーザー名とパスワード、Google二段階認証の安全に対して全責任を負う。ユーザーの原因でユーザー名やパスワード、Google二段階認証が漏れた場合の法的結果は、ユーザー本人が責任を負うものとし、ユーザー自身がこれらの情報を漏らしたことによる財産損失についてProcyonは責任を負いません。（4）パスワードをなくした場合、電子メールで送信されたリンクを登録してパスワードをリセットすることができます。ユーザーが口座を不正に使用したり、他のセキュリティホールがあることを発見したら、直ちにProcyonに知らせるべきです。',
    pa2: '2. Procyonの承諾：法律規程により、またはユーザーの事前許可なしに、Procyonはいかなる第三者にユーザーのパスワード、名前、携帯番号などの非公開情報を開示しません。',
    pa3: '3. ユーザーはProcyonが提供した各オンライン、オフライン活動に参加する権利があります。',
    pa4: '4. ユーザーはProcyonのウェブサイトの規定に基づいて、Procyonが提供するその他の各種サービスを利用する権利があります。',

    he2: 'ユーザーの義務',
    pa5: '1. Procyonを利用して国家の安全を害し、国家の秘密を漏洩し、国家社会集団の合法的権益を侵害してはいけません。Procyonで以下の情報を作成、複製、伝播してはいけない。（1）反抗を扇動し、憲法と法律、行政法規を破壊し、実施したもの。（2）国家政権を転覆させ、社会主義制度を覆すよう扇動したもの。（3）国家分裂を扇動し、国家統一を破壊する；（4）民族憎悪、民族差別を扇動し、民族団結を破壊する；（5）事実を捏造し、歪曲し、デマをとばし、社会秩序を乱す；（6）封建迷信、猥褻、ポルノ、ギャンブル、暴力、殺人、恐怖、教唆犯罪を宣伝する；（7）他人を公然と侮辱したり、事実を捏造して他人を誹謗したり、その他の悪意のある攻撃をしたりする場合、（8）国家機関の信用を損なう場合、（9）その他の憲法及び法律行政法規に違反する場合、（10）商業広告行為を行う場合。',
    pa6: '2. ユーザーはProcyonウェブサイトのアカウントを不審なアクティビティや悪意を持って作成することは禁じられています。下記の行為を含みますが、これに限りません。不当利得、投機、現金化、受賞などを目的とした複数の口座を登録、他のユーザーアカウントを盗用。もしユーザーが上記の規定に違反したら、Procyonは直接にあらゆる必要な措置を取って、違反で利益を得たことを取り消して、訴訟の形式を通じてユーザーの法律責任などを追及する権利があります。',
    pa7: '3. ユーザーがProcyonをいかなる形式で各種の不法活動に従事する場所、プラットフォームまたは媒介とすることを禁止します。Procyonの授権または許可を得ていない場合、ユーザーは当駅の名義を使用し、いかなる商業活動に従事してもいけません。また、いかなる形式でもProcyonを商業活動の場所、プラットフォームまたは媒介として使用してはいけません。',

    he3: '免責条項',
    pa8: '1. インターネットの特殊性に基づいて、Procyonのサービスが中断されないことは保証されていません。サービスの適時性、安全性については保証しません。Procyonの原因ではない損失による責任は負いません。Procyonは、ユーザーがこのサイトを安全にアクセスし、使用することができるようにするために力を尽くしますが、Procyonは、このサイトやサーバーがウイルスやその他の潜在的な有害要素を含んでいないことを保証していません。そのため、ユーザーは、業界で公認されているソフトウェアを使って、Procyonからダウンロードされたファイルのウイルスを調べてください。特にハッカーの侵入行為や類似の行為についても、私たちはいかなる責任も負いかねます。',
    pa9: '2. Procyonはユーザーが発表した情報の保存、修正、削除、または保存に失敗した場合、責任を負いません。サイト上の非Procyonの故意による植字ミス、不注意などに対しては責任を負いません。Procyonはウェブサイト上の漏れや誤りについて改善の権利はありますが義務ではありません。',
    pa10: '3. Procyonが書面で明確に約束していない限り、Procyonはユーザーに対していかなる方式（経由、接続またはダウンロードを含むがこれに限らない）で当サイトから得られたいかなる情報（広告などを含むがこれに限らない）についてその正確性、完全性、信頼性を保証しません。ユーザーが当サイト上の情報により購入、取得したいかなる製品、サービスまたは資料についてProcyonは責任を負いません。ユーザーは、当サイトの情報を使用することによるリスクを自己負担します。',
    pa11: '4. すべてのユーザーに送る通知は、Procyonが正式なページ広告、ダイレクトメッセージ、電子メール、カスタマーサービス電話、携帯メールまたは通常の手紙を通じて伝達されます。いかなる非Procyonの正規ルートを通じて獲得した当選、割引などの活動や情報は、Procyonが法律責任を負いません。',

    he4: '情報の秘密保持',
    pa12: '1. 本規約でいうProcyonのユーザー情報とは、法律、法規及び関連規定に適合し、下記の範囲に適合する情報を指します。（1）ユーザーがProcyonに登録する時、Procyonに提供する個人情報；（2）ユーザーがProcyonサービス、ウェブサイト活動またはウェブページを訪問する時、Procyonが自動的に受信し記録するユーザブラウザ端末または携帯電話のクライアントデータ、IPアドレス、ウェブサイトのCookieの中の資料とユーザーが使用するウェブページの記録を含むが、これらに限定しません。（3）Procyonはビジネスパートナーから合法的に入手したユーザー個人情報です。',
    pa13: '2. Procyonの承諾：法律により、またはユーザーの事前許可なしに、Procyonはいかなる第三者にユーザーのパスワード、名前、携帯番号などの非公開情報を開示しません。',
    pa14: '3. 下記の法定の状況において、ユーザーの個人情報は一部または全部開示されます。（1）ユーザーの同意を得て、ユーザー本人または他の第三者に開示する；（2）法律、法規等の関連規定、或いは行政機構の要求に基づき、行政、司法機構又はその他の法律規定の第三者に開示する。（3）その他のProcyonが法律、法規などの関連規定に基づいて披露します。',

    he5: 'サービスの提供、修正及び終了',
    pa15: '1. ユーザーはProcyonの各サービスを受けると同時に、Procyonから提供される各種情報サービスを受けることに同意します。ユーザーはProcyonにその電子メール、携帯電話、通信住所などに商業情報を送ることの権限を許可します。ユーザーはProcyon関連ページにアクセスして資料を変更することができます。',
    pa16: '2. Procyonは随時修正またはサービスを中断し、ユーザーに通知しない権利を保留します。Procyonはサービスを修正または中断する権利があり、ユーザーまたは直接関係のない第三者に責任を負う必要がありません。',
    pa17: '3. ユーザーは本規約の修正に異議があり、またはProcyonのサービスに不満がある場合、以下の権利を行使することができます。（1）Procyonのネットサービスの使用を停止する。（2）開発者メールアドレスなど合理的なルートを通じて、Procyonに対するサービスの停止を書面で効果的に通知します。サービス終了後、ユーザーがProcyonサービスを利用する権利は直ちに終了します。この場合、Procyonは未処理の情報または未完成のサービスをユーザーまたは直接関係のない第三者に転送する義務がありません。',

    he6: '適用法律と裁判所',
    pa18: '1. ユーザーがProcyonサイトを使用したことにより、または関連するあらゆる論争、権利主張またはその他の事項は、いずれもProcyon所在地の法律の管轄を受けます。',
    pa19: '2. ユーザーとProcyonで論争が発生した場合、まず誠実と信用の原則に基づいて協議を通じて解決しなければなりません。協議が成立しない場合、Procyonの所在地の人民法院に訴訟を提起することになります。'
  }
}
