# Project Context

## Project Summary

This project is a Next.js website for an adult content creator. The site should present her personal brand, sell paid subscriptions, restrict premium content to paying members, and let visitors book her for personal visitation or travel-related appearances.

The current frontend has been reworked into a polished static prototype. It includes public sales pages, auth UI, admin pages, shared public mobile navigation, and a shared admin navigation component. The project is not connected to a backend yet.

## Current Stack

- Framework: Next.js `16.2.4`
- React: `19.2.4`
- Styling: Tailwind CSS v4 through `@import "tailwindcss"` in `app/globals.css`
- Router: App Router under `app/`
- Fonts: `next/font/google` with Geist and Geist Mono in `app/layout.tsx`
- Assets: stored in `public/images/`

Important repo instruction: this project uses a newer/breaking Next.js version. Before making code changes, read the relevant guide from `node_modules/next/dist/docs/` instead of assuming older Next.js conventions.

## Current File State

### Built Frontend Pages

- `app/page.tsx`: polished homepage with media hero, responsive brand navigation, `Subscribe`, `Book Visit`, and `Sign In` actions, membership section, content previews, booking section, and subscriber path.
- `app/subscribe/page.tsx`: subscription page with responsive brand navigation, three plan cards, subscription steps, Telegram verification messaging, and FAQ section. Plan buttons currently route to signup.
- `app/booking/page.tsx`: booking request UI with responsive brand navigation, booking types, review process, contact/details form, budget/date/duration fields, 18+ confirmation, and safety/privacy confirmation.
- `app/content/page.tsx`: locked content preview page with responsive brand navigation, content categories, preview cards, subscribe/signin CTAs, member benefits, and private Telegram verification message.
- `app/MobileNav.tsx`: shared client component for public mobile navigation. It renders an accessible hamburger menu linking to Home, Content, Subscribe, Booking, and Sign in. Used by the homepage, subscription page, content page, and booking page.
- `app/auth/signup/page.tsx`: visual-only signup form with member account messaging, name/email/password fields, and 18+ confirmation.
- `app/auth/signin/page.tsx`: visual-only signin form for member access. Public copy intentionally does not advertise admin access.
- `app/admin/dashboard/page.tsx`: admin overview with metrics, booking snapshot, quick actions, content queue, and backend setup checklist.
- `app/admin/dashboard/content/page.tsx`: admin content manager UI with draft form, upload placeholder, content queue, visibility/status tags, and publishing checklist.
- `app/admin/dashboard/booking/page.tsx`: admin booking management UI with request stats, incoming request list, review/contact buttons, review notes, and status flow.
- `app/admin/subscribers/page.tsx`: subscriber management UI with subscriber stats, member list, plans, payment state, Telegram state, and backend access rules.
- `app/admin/AdminTopNav.tsx`: shared sticky admin top navigation used across admin pages.
- `app/layout.tsx`: root layout with project metadata and global font variables.
- `app/globals.css`: Tailwind import, theme variables, and basic body styles.

### Notes

- `app/content/page.tsx` now exists and powers the `/content` route.
- `app/content/pages.tsx` still exists as a harmless placeholder, but it is not the route file. It can be removed later to avoid confusion.
- Public pages now use shared mobile navigation via `app/MobileNav.tsx`; desktop nav starts at the `md` breakpoint on the updated public headers.
- All current forms are visual-only. No form submits to a backend yet.
- Last verified build: `npm run build` passes.

## Product Goals

1. Present the creator as a premium adult creator with a polished, intimate, personal brand.
2. Convert visitors into paid subscribers.
3. Give paid subscribers access to premium content.
4. Redirect verified subscribers to her private Telegram community.
5. Allow users to book her for personal visitation or travel bookings.
6. Provide an admin area to manage subscribers, content, and bookings.

## Target Audience

The audience is adult visitors who want paid access to exclusive creator content and possibly want to book private visitation/travel services. The experience should feel premium, private, and trustworthy. Avoid making the site look like a generic template or a loud sales page.

## Visual Direction

Current direction from the hero:

- Dark media-led hero background.
- Pink accent color currently around `#e85a8e` / `#E85A8E`.
- Brand mark/logo in `public/images/logo.svg`.
- Soft romantic icon asset in `public/images/love.svg`.
- Premium, intimate creator tone.

Recommended UI direction:

- Keep the media-first hero, but improve spacing, contrast, mobile responsiveness, and CTA hierarchy.
- Use a restrained dark base with pink accents, but avoid making every section the same pink/dark pattern.
- Keep navigation simple: Home, Content, Subscribe, Booking, Sign In.
- Use clear conversion CTAs: `Subscribe Now`, `View Plans`, `Book Visit`.
- Avoid explicit language in public-facing text. Use terms like `exclusive content`, `private updates`, `members-only posts`, and `private community`.

## Main User Flows

### Public Visitor Flow

1. Visitor lands on homepage.
2. Visitor sees creator identity, value proposition, and CTA.
3. Visitor can view subscription benefits and booking offer.
4. Visitor chooses to subscribe, sign in, or request a booking.

### Subscription Flow

1. Visitor opens `/subscribe`.
2. Visitor chooses a subscription plan.
3. Visitor signs up or signs in.
4. Visitor completes payment.
5. Server verifies payment through a trusted payment callback/webhook.
6. User subscription status is marked active.
7. User is redirected to a success page or member area.
8. User receives access to the private Telegram link.

Important: do not expose the private Telegram link in frontend code before payment verification. Store it in an environment variable or database and only reveal/redirect after the backend confirms the subscription is active.

### Private Telegram Flow

The creator wants subscribers redirected to her private Telegram after subscribing.

Recommended implementation:

- Store `PRIVATE_TELEGRAM_INVITE_URL` server-side.
- After successful payment verification, redirect the user to an internal success route such as `/subscribe/success`.
- On the success route, confirm the current user has an active subscription.
- Then show a `Join Private Telegram` button or redirect to the Telegram invite.

Safer option:

- Show a button instead of immediate redirect so the user understands they are leaving the site.
- Rotate the private invite link if it leaks.
- Consider generating limited-use or expiring Telegram invite links manually/admin-side if the Telegram setup supports it.

### Content Access Flow

1. User signs in.
2. User opens `/content`.
3. App checks subscription status.
4. Active subscribers can view premium content.
5. Non-subscribers are redirected to `/subscribe` or shown a locked preview.

### Booking Flow

1. Visitor opens `/booking`.
2. Visitor selects booking type: personal visitation, travel booking, appearance, or custom request.
3. Visitor fills contact details, destination/location, preferred date, duration, and notes.
4. Visitor submits request.
5. Admin reviews booking request in dashboard.
6. Admin contacts user externally or manages status in the admin area.

Booking should include clear consent, age, location, and safety rules before submission.

## Suggested Route Map

Public routes:

- `/` - Homepage and brand introduction.
- `/subscribe` - Subscription plans and payment entry.
- `/content` - Members-only content area with locked state for non-subscribers.
- `/booking` - Booking request form.
- `/auth/signup` - Account creation.
- `/auth/signin` - Account login.

Post-payment routes:

- `/subscribe/success` - Verifies active subscription and gives Telegram access.
- `/subscribe/cancelled` - Payment cancelled or failed state.

Admin routes:

- `/admin/dashboard` - Admin overview.
- `/admin/dashboard/content` - Upload/manage premium content.
- `/admin/dashboard/booking` - Manage booking requests.
- `/admin/subscribers` - View active/inactive subscribers.

API routes to add when backend is implemented:

- `/api/auth/*` or selected auth provider routes.
- `/api/subscribe/checkout` - creates payment checkout session.
- `/api/subscribe/webhook` - verifies payment events.
- `/api/bookings` - creates booking requests.
- `/api/content` - manages content metadata/access.

## Data Models To Plan

### User

- `id`
- `name`
- `email`
- `passwordHash` or auth provider ID
- `role`: `user` or `admin`
- `createdAt`

### Subscription

- `id`
- `userId`
- `plan`
- `status`: `active`, `inactive`, `cancelled`, `expired`
- `paymentProvider`
- `paymentCustomerId`
- `currentPeriodStart`
- `currentPeriodEnd`
- `createdAt`

### Content

- `id`
- `title`
- `description`
- `mediaUrl`
- `mediaType`: `image`, `video`, `post`
- `visibility`: `free`, `subscriber`
- `createdAt`

### Booking

- `id`
- `name`
- `email`
- `phone`
- `bookingType`
- `location`
- `preferredDate`
- `duration`
- `message`
- `status`: `pending`, `reviewing`, `accepted`, `declined`, `completed`
- `createdAt`

## Backend/Service Decisions Still Needed

The project currently has no configured backend, database, auth, or payment integration. These need to be selected before subscription and gated content can be completed.

Likely choices:

- Database/auth: Supabase or Prisma with a hosted database.
- Payments: Stripe, Paystack, Flutterwave, or another provider based on the creator's country and payout needs.
- Media storage: Supabase Storage, Cloudinary, S3-compatible storage, or private CDN.
- Admin auth: role-based access using the selected auth provider.

The owner/developer wants to be involved in the backend decisions. Before implementing backend code, pause and discuss the architecture clearly.

Backend topics to discuss before coding:

- Auth provider: Supabase Auth, Clerk, Auth.js/NextAuth, or custom auth.
- Database: where users, subscriptions, bookings, content metadata, and admin roles live.
- Payment provider: Stripe, Paystack, Flutterwave, or another provider based on payout country.
- Media storage: protected storage for premium photos/videos.
- Telegram flow: server-only invite URL revealed only after verified active subscription.
- Admin protection: admin routes must require authentication and role checks.

## Security And Privacy Notes

- The Telegram invite must not be hardcoded in client components.
- Premium content URLs should not be public if the content must stay restricted.
- Use server-side subscription checks before serving protected content.
- Admin routes need real authentication and role checks.
- Webhook verification is required before marking a subscription active.
- Booking forms should include spam protection and validation.
- Because this is adult-oriented, add age confirmation and terms/consent language before purchase or booking.

## Immediate Next Steps

1. Discuss backend architecture before writing backend code.
2. Choose auth, database, payment provider, and media storage.
3. Design the database tables/models for users, subscriptions, bookings, content, and roles.
4. Connect signup/signin to the chosen auth provider.
5. Protect admin routes with role-based access.
6. Connect `/subscribe` to checkout and webhook verification.
7. Add protected member content logic.
8. Add Telegram access only after verified active subscription.
9. Connect `/booking` form to a booking API and admin management.

## Development Notes

- Keep using the App Router structure under `app/`.
- Read local Next.js docs before implementing unfamiliar routing, middleware, server actions, or API behavior because this Next version has breaking changes.
- Keep frontend copy polished and adult-friendly without being unnecessarily explicit.
- Preserve the creator-brand direction from the current hero while improving layout quality, accessibility, and responsiveness.
