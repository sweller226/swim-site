export type PageMeta = {
    title: string;
    description: string;
};

/** Homepage metadata */
export const HOMEPAGE_META: PageMeta = {
    title: "Dave's Swim School | Private Swim Lessons in North York",
    description:
        "Private on-site and travel swim lessons for kids and adults. Book online, learn with experienced instructors, and build confidence in the water.",
};

/** Default / fallback metadata */
export const DEFAULT_META: PageMeta = {
    title: "Dave's Swim School",
    description:
        "Private on-site and travel swim lessons in North York. Online booking, experienced instructors, and flexible scheduling for swimmers age 6+.",
};

/** Lessons page */
export const LESSONS_META: PageMeta = {
    title: "Swim Lesson Pricing | Dave's Swim School",
    description:
        "On-site, travel, and pool rental options with clear pricing. Punch-card style credit packages: six lessons for the price of five. Book through our online system.",
};

/** FAQ page */
export const FAQ_META: PageMeta = {
    title: "Swim Lesson FAQ | Dave's Swim School",
    description:
        "Answers about ages, what to bring, booking and rescheduling, cancellations, lesson locations, and instructor certifications.",
};

/** Contact page */
export const CONTACT_META: PageMeta = {
    title: "Contact Us | Dave's Swim School",
    description:
        "Email and phone for Dave's Swim School. Reach out for questions, scheduling help, or anything else about swim lessons.",
};