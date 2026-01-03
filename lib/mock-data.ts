// Mock product data for initial development
export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    category: string;
    imageUrl: string;
    iconUrl: string;
    creator: string;
    views: number;
    uploadDate: string;
    tags: string[];
    affiliateUrl: string;
    score: {
        final: number;
        performance: number;
        adoption: number;
        valuePrice: number;
        reliability: number;
        accessibility: number;
    };
}

export const mockProducts: Product[] = [
    {
        id: "1",
        name: "Forest",
        slug: "forest",
        description: "Stay focused by pomodoro timer",
        category: "Productivity",
        imageUrl: "https://framerusercontent.com/images/gi0RnUMTk56o1exrYaGpL9iqsU.png",
        iconUrl: "https://framerusercontent.com/images/6ZgFcitynEFYYnZ3sebFYTnYpU.png",
        creator: "Seekertech",
        views: 772,
        uploadDate: "Nov 16, 2025",
        tags: ["Automation", "Budgeting", "Habit tracking"],
        affiliateUrl: "https://apps.apple.com/us/app/forest-focus-for-productivity/id866450515",
        score: {
            final: 87,
            performance: 90,
            adoption: 85,
            valuePrice: 88,
            reliability: 86,
            accessibility: 84,
        },
    },
    {
        id: "2",
        name: "Grammarly",
        slug: "grammarly",
        description: "AI assistant for work & study.",
        category: "Productivity",
        imageUrl: "https://framerusercontent.com/images/NLsQz1ovZdb770DfL3j1CrpxNE.png",
        iconUrl: "https://framerusercontent.com/images/D2X2zDU2M9KYrq5sbqskiUw8kaw.png",
        creator: "Grammarly Inc.",
        views: 1245,
        uploadDate: "Nov 10, 2025",
        tags: ["Writing", "AI", "Productivity"],
        affiliateUrl: "https://apps.apple.com/us/app/grammarly-ai-writing-keyboard/id1158877342",
        score: {
            final: 92,
            performance: 95,
            adoption: 92,
            valuePrice: 88,
            reliability: 94,
            accessibility: 90,
        },
    },
    {
        id: "3",
        name: "Craft",
        slug: "craft",
        description: "Journal ideas, meeting notes.",
        category: "Productivity",
        imageUrl: "https://framerusercontent.com/images/GaTOY0Ac8qsKmOX9abV4i4WhVIA.png",
        iconUrl: "https://framerusercontent.com/images/pIxm0z5DUWHQ4G6NE5U8X6iATnc.png",
        creator: "Craft Docs",
        views: 892,
        uploadDate: "Nov 8, 2025",
        tags: ["Notes", "Collaboration", "Documents"],
        affiliateUrl: "https://apps.apple.com/us/app/craft-write-docs-ai-editing/id1487937127",
        score: {
            final: 89,
            performance: 88,
            adoption: 87,
            valuePrice: 91,
            reliability: 90,
            accessibility: 89,
        },
    },
    {
        id: "4",
        name: "Notion",
        slug: "notion",
        description: "All-in-one workspace for notes, tasks, wikis, and databases.",
        category: "Productivity",
        imageUrl: "https://framerusercontent.com/images/gi0RnUMTk56o1exrYaGpL9iqsU.png",
        iconUrl: "https://framerusercontent.com/images/6ZgFcitynEFYYnZ3sebFYTnYpU.png",
        creator: "Notion Labs",
        views: 2156,
        uploadDate: "Nov 5, 2025",
        tags: ["Workspace", "Collaboration", "Database"],
        affiliateUrl: "https://notion.so",
        score: {
            final: 94,
            performance: 93,
            adoption: 96,
            valuePrice: 92,
            reliability: 95,
            accessibility: 93,
        },
    },
    {
        id: "5",
        name: "Slack",
        slug: "slack",
        description: "Team communication and collaboration platform.",
        category: "Business",
        imageUrl: "https://framerusercontent.com/images/NLsQz1ovZdb770DfL3j1CrpxNE.png",
        iconUrl: "https://framerusercontent.com/images/D2X2zDU2M9KYrq5sbqskiUw8kaw.png",
        creator: "Slack Technologies",
        views: 3421,
        uploadDate: "Nov 1, 2025",
        tags: ["Communication", "Team", "Messaging"],
        affiliateUrl: "https://slack.com",
        score: {
            final: 91,
            performance: 90,
            adoption: 94,
            valuePrice: 87,
            reliability: 93,
            accessibility: 92,
        },
    },
    {
        id: "6",
        name: "Figma",
        slug: "figma",
        description: "Collaborative interface design tool.",
        category: "Design",
        imageUrl: "https://framerusercontent.com/images/GaTOY0Ac8qsKmOX9abV4i4WhVIA.png",
        iconUrl: "https://framerusercontent.com/images/pIxm0z5DUWHQ4G6NE5U8X6iATnc.png",
        creator: "Figma Inc.",
        views: 2789,
        uploadDate: "Oct 28, 2025",
        tags: ["Design", "Collaboration", "Prototyping"],
        affiliateUrl: "https://figma.com",
        score: {
            final: 96,
            performance: 97,
            adoption: 95,
            valuePrice: 94,
            reliability: 96,
            accessibility: 97,
        },
    },
];
