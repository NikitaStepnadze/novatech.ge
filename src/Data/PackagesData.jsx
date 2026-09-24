// Single source for the packages shown on the home page pricing section, the
// /packages overview and each /packages/[slug] detail page, so prices and
// feature lists can't drift between them.
//
// Packages are listed cheapest first. `basedOn` names the package whose
// features this one also includes ("ყველაფერი რაც PLUS პაკეტში").
export const packages = [
    {
        slug: "plus",
        name: "NOVATECH PLUS",
        shortName: "PLUS",
        price: 150,
        oldPrice: 300,
        tagline: "იდეალურია დამწყები და მცირე ბიზნესისთვის",
        overview:
            "NOVATECH PLUS არის სწრაფი და ხელმისაწვდომი გზა ონლაინ სივრცეში გამოსაჩენად. ერთგვერდიანი, თანამედროვე ვებსაიტი, სადაც მომხმარებელი ერთ ადგილას გაიგებს ყველაფერს შენს ბიზნესზე — რას აკეთებ, სად ხარ და როგორ დაგიკავშირდეს.",
        idealFor: [
            "ახალი ბიზნესი, რომელსაც პირველი ვებსაიტი სჭირდება",
            "ფრილანსერები და სპეციალისტები — პორტფოლიოსთვის",
            "კაფეები, სალონები და ლოკალური სერვისები",
            "ვისაც სოციალური ქსელების გარდა საკუთარი ოფიციალური გვერდი სურს",
        ],
        features: [
            {
                title: "თანამედროვე დიზაინი",
                text: "სუფთა და თანამედროვე ვიზუალი, რომელიც შენი ბრენდის ფერებსა და სტილზეა მორგებული.",
            },
            {
                title: "ერთი გვერდი (პორტფოლიო)",
                text: "ყველა მნიშვნელოვანი ინფორმაცია ერთ გვერდზე — შენს შესახებ, სერვისები, ნამუშევრები და კონტაქტი.",
            },
            {
                title: "დომენი + ჰოსტინგი",
                text: "ვარეგისტრირებთ დომენს და ვათავსებთ საიტს სერვერზე — ტექნიკურ დეტალებზე ფიქრი არ დაგჭირდება.",
            },
            {
                title: "სოციალური ქსელების ინტეგრაცია",
                text: "Facebook-ის, Instagram-ის და სხვა ქსელების ბმულები, რომ მომხმარებელმა ყველგან გიპოვოს.",
            },
            {
                title: "Google Maps ინტეგრაცია",
                text: "ინტერაქტიული რუკა შენი მისამართით — კლიენტი მარტივად მოგაგნებს.",
            },
            {
                title: "ყველა მოწყობილობაზე მორგებული",
                text: "საიტი ერთნაირად კარგად გამოიყურება მობილურზე, პლანშეტსა და კომპიუტერზე.",
            },
        ],
    },
    {
        slug: "pro",
        name: "NOVATECH PRO",
        shortName: "PRO",
        price: 250,
        oldPrice: 500,
        basedOn: "plus",
        tagline: "საუკეთესო არჩევანი მზარდი ბიზნესისთვის",
        overview:
            "NOVATECH PRO განკუთვნილია ბიზნესისთვის, რომელსაც მეტი სივრცე სჭირდება. რამდენიმეგვერდიანი ვებსაიტი, რომელიც Google-ში მოსაძებნად არის მომზადებული, რამდენიმე ენაზე მუშაობს და მომხმარებლის შეტყობინებებს პირდაპირ შენს ელ. ფოსტაზე აგზავნის.",
        idealFor: [
            "კომპანიები, რომლებსაც რამდენიმე სერვისი ან მიმართულება აქვთ",
            "ბიზნესი, რომელსაც Google-იდან ახალი კლიენტები სურს",
            "უცხოელ მომხმარებლებზე ორიენტირებული ბიზნესი",
            "ვისაც ონლაინ მოთხოვნების მიღება სურს",
        ],
        features: [
            {
                title: "რამდენიმე გვერდი",
                text: "ცალკე გვერდები სერვისებისთვის, ჩვენ შესახებ, გალერეისა და კონტაქტისთვის — ინფორმაცია მოწესრიგებული და ადვილად მოსაძებნია.",
            },
            {
                title: "SEO ოპტიმიზაცია",
                text: "ვამზადებთ სათაურებს, აღწერებსა და სტრუქტურას ისე, რომ Google-მა შენი საიტი უკეთ გაიგოს და მაღლა გამოაჩინოს.",
            },
            {
                title: "ელ. ფოსტის ფორმების ინტეგრაცია",
                text: "საკონტაქტო ფორმა, რომლის შევსებისას შეტყობინება პირდაპირ შენს ელ. ფოსტაზე მოდის.",
            },
            {
                title: "Google Search Console",
                text: "საიტს ვარეგისტრირებთ Google Search Console-ში, რომ დაინახო, რა საძიებო სიტყვებით გპოულობენ.",
            },
            {
                title: "მრავალენოვანი",
                text: "საიტი რამდენიმე ენაზე — მაგალითად, ქართულად და ინგლისურად.",
            },
        ],
    },
    {
        slug: "ultra",
        name: "NOVATECH ULTRA",
        shortName: "ULTRA",
        price: 400,
        basedOn: "pro",
        tagline: "პრემიუმ დიზაინი და ინდივიდუალური ფუნქციონალი",
        overview:
            "NOVATECH ULTRA მათთვისაა, ვისაც სტანდარტული საიტი აღარ ჰყოფნის. პრემიუმ UI/UX დიზაინი 3D ელემენტებით, ონლაინ ჯავშნის სისტემა და ონლაინ მაღაზია — ვებსაიტი, რომელიც არა მხოლოდ ინფორმაციას აწვდის, არამედ თავად მუშაობს შენი ბიზნესისთვის.",
        idealFor: [
            "სასტუმროები, კლინიკები და სალონები — ონლაინ ჯავშნისთვის",
            "ბრენდები, რომლებსაც ონლაინ გაყიდვა სურთ",
            "ბიზნესი, რომელიც დიზაინით კონკურენტებისგან უნდა გამოირჩეოდეს",
            "პროექტები არასტანდარტული ფუნქციონალით",
        ],
        features: [
            {
                title: "პრემიუმ UI/UX დიზაინი + 3D",
                text: "ინდივიდუალურად შექმნილი დიზაინი, 3D ელემენტები და ანიმაციები, რომლებიც საიტს დასამახსოვრებელს ხდის.",
            },
            {
                title: "ჯავშნის სისტემა",
                text: "მომხმარებელი თავად ირჩევს თარიღსა და დროს და ჯავშანს ონლაინ აკეთებს — ზარების გარეშე.",
            },
            {
                title: "E-commerce და ინდივიდუალური ფუნქციონალი",
                text: "ონლაინ მაღაზია პროდუქტების კატალოგითა და კალათით, ან ნებისმიერი ფუნქცია, რომელიც შენს ბიზნესს სჭირდება.",
            },
        ],
    },
    {
        slug: "all-in",
        name: "NOVATECH ALL IN",
        shortName: "ALL IN",
        price: 750,
        oldPrice: 1500,
        basedOn: "ultra",
        featured: true,
        tagline: "სრული ციფრული გადაწყვეტა მაქსიმალური შედეგისთვის",
        overview:
            "NOVATECH ALL IN ჩვენი ყველაზე სრული პაკეტია. ვებსაიტის გარდა ვქმნით ბრენდინგს და სოც-მედიის დიზაინს, ვაერთებთ ონლაინ გადახდასა და განვადებას, ვაწყობთ ანალიტიკას და ვზრუნავთ საიტის ტექნიკურ მხარდაჭერაზე — ერთი გუნდი ყველა ციფრული საჭიროებისთვის.",
        idealFor: [
            "ახალი ბრენდი, რომელსაც ყველაფერი ნულიდან სჭირდება",
            "ონლაინ მაღაზიები ონლაინ გადახდითა და განვადებით",
            "ბიზნესი, რომელიც რეკლამაში ინვესტირებს და შედეგის გაზომვა სურს",
            "ვისაც ერთი პარტნიორი სურს ყველა ციფრული საკითხისთვის",
        ],
        // Shown with icons above the checklist on the home page card.
        highlights: [
            {
                icon: "fa-headset",
                title: "ტექნიკური მხარდაჭერა",
            },
            {
                icon: "fa-chart-line",
                title: "GSC + Google Analytics",
                text: "Google Search Console და Google Analytics — ხედავ, საიდან მოდიან მომხმარებლები და რას აკეთებენ საიტზე.",
            },
        ],
        features: [
            {
                title: "განვადების / გადახდის ინტეგრაცია",
                text: "ონლაინ გადახდისა და განვადების სისტემები, რომ მომხმარებელმა შეკვეთა საიტიდან გაუსვლელად დაასრულოს.",
            },
            {
                title: "ბრენდინგი",
                text: "ლოგო, ფერთა პალიტრა და ვიზუალური სტილი, რომელიც ბრენდს ერთიან სახეს აძლევს.",
            },
            {
                title: "10 სოც-მედია პოსტის დიზაინი",
                text: "10 პოსტის დიზაინი ბრენდის სტილში — სოციალურ ქსელებში საიტის გაშვების მხარდასაჭერად.",
            },
            {
                title: "კომპლექსური ფუნქციონალი",
                text: "რთული ლოგიკა — მაგალითად, პირადი კაბინეტები, ადმინ პანელი ან ინტეგრაცია გარე სისტემებთან.",
            },
            {
                title: "Meta Pixel / Google Tag Manager",
                text: "ვაყენებთ Meta Pixel-სა და Google Tag Manager-ს, რომ რეკლამის ეფექტიანობა ზუსტად გაზომო.",
            },
            {
                title: "ტექნიკური მხარდაჭერა",
                text: "გაშვების შემდეგაც ვზრუნავთ საიტის განახლებებზე, უსაფრთხოებასა და გამართულ მუშაობაზე.",
            },
        ],
    },
];

export const packagePath = (slug) => `/packages/${slug}/`;

export const getPackage = (slug) => packages.find((pkg) => pkg.slug === slug);

// Every package this one builds on, nearest first (ALL IN → ULTRA, PRO, PLUS).
export const getIncludedPackages = (pkg) => {
    const included = [];
    let current = getPackage(pkg.basedOn);
    while (current) {
        included.push(current);
        current = getPackage(current.basedOn);
    }
    return included;
};

// The next package up, offered as an upgrade on the detail page.
export const getNextPackage = (pkg) =>
    packages.find((candidate) => candidate.basedOn === pkg.slug);

// A package's own features plus any highlight the checklist doesn't repeat.
export const getPackageFeatures = (pkg) => {
    const titles = new Set(pkg.features.map((feature) => feature.title));
    const extras = (pkg.highlights ?? []).filter(
        (highlight) => !titles.has(highlight.title)
    );
    return [...pkg.features, ...extras];
};

// One row per feature for the comparison table, marking which packages have
// it: the package that introduces it and every package built on that one.
export const getComparisonRows = () => {
    const rows = [];
    const seen = new Set();

    packages.forEach((pkg) => {
        getPackageFeatures(pkg).forEach(({ title }) => {
            if (seen.has(title)) return;
            seen.add(title);
            rows.push({
                title,
                included: packages.map(
                    (candidate) =>
                        candidate.slug === pkg.slug ||
                        getIncludedPackages(candidate).includes(pkg)
                ),
            });
        });
    });

    return rows;
};
