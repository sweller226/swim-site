export type PageMeta = {
    title: string;
    description: string;
};

const defaultMeta: PageMeta = {
    title: "Dave's Swim School",
    description:
        "Private on-site and travel swim lessons in North York. Online booking, experienced instructors, and flexible scheduling for swimmers age 6+.",
};

const byPath: Record<string, PageMeta> = {
    '/': {
        title: "Dave's Swim School | Private Swim Lessons in North York",
        description:
            "Private on-site and travel swim lessons for kids and adults. Book online, learn with experienced instructors, and build confidence in the water.",
    },
    '/lessons': {
        title: "Swim Lesson Pricing | Dave's Swim School",
        description:
            'On-site, travel, and pool rental options with clear pricing. Punch-card style credit packages: six lessons for the price of five. Book through our online system.',
    },
    '/faq': {
        title: "Swim Lesson FAQ | Dave's Swim School",
        description:
            'Answers about ages, what to bring, booking and rescheduling, cancellations, lesson locations, and instructor certifications.',
    },
    '/contact': {
        title: "Contact Us | Dave's Swim School",
        description:
            "Email and phone for Dave's Swim School. Reach out for questions, scheduling help, or anything else about swim lessons.",
    },
};

export function normalizePath(pathname: string): string {
    if (pathname.length > 1 && pathname.endsWith('/')) {
        return pathname.slice(0, -1);
    }
    return pathname;
}

export function getPageMeta(pathname: string): PageMeta {
    const key = normalizePath(pathname);
    return byPath[key] ?? defaultMeta;
}
