export const metadata = {
  title: 'গোপনীয়তা নীতি | বাজার দর',
  description: 'বাজার দর ওয়েবসাইটের গোপনীয়তা নীতি',
};

export default function PrivacyPolicyPage() {
  return (
    <article className="max-w-3xl mx-auto py-10 px-4 text-slate-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-2">গোপনীয়তা নীতি</h1>
      <p className="text-sm text-slate-500 mb-8">
        সর্বশেষ হালনাগাদ: ১২ অক্টোবর, ২০২৬
      </p>

      <p className="mb-6">
        &quot;বাজার দর&quot; একটি শিক্ষামূলক ওয়েব প্রজেক্ট, যেখানে নিত্যপ্রয়োজনীয়
        পণ্যের বাজারদর দেখা যায়। আপনার তথ্য কীভাবে সংগ্রহ ও ব্যবহার করা হয়, তা এই
        পাতায় সংক্ষেপে জানানো হলো।
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">আমরা কোন তথ্য সংগ্রহ করি</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>আপনার নাম ও ইমেইল ঠিকানা (সাইন আপের সময়, অথবা Google/GitHub দিয়ে লগইনের সময়)।</li>
        <li>ইমেইল ও পাসওয়ার্ডে সাইন আপ করলে আপনার পাসওয়ার্ড, যা এনক্রিপ্টেড (হ্যাশ) অবস্থায় সংরক্ষিত হয়।</li>
        <li>লগইন সেশন বজায় রাখার জন্য প্রয়োজনীয় কুকি।</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">তথ্য কীভাবে ব্যবহার করা হয়</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>আপনাকে সাইন ইন করানো এবং পণ্যের বিস্তারিত পেজে প্রবেশের অনুমতি দেওয়া।</li>
        <li>প্রোফাইল পেজে আপনার নাম ও ইমেইল দেখানো।</li>
      </ul>
      <p className="mt-2">
        আমরা আপনার তথ্য বিক্রি করি না, বিজ্ঞাপনের জন্য ব্যবহার করি না এবং তৃতীয়
        পক্ষের কাছে শেয়ার করি না।
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">তথ্য কোথায় সংরক্ষিত থাকে</h2>
      <p>
        আপনার অ্যাকাউন্টের তথ্য MongoDB Atlas ডেটাবেসে সংরক্ষিত থাকে। সাইটটি Vercel
        প্ল্যাটফর্মে চলে। Google বা GitHub দিয়ে লগইন করলে শুধু আপনার নাম ও ইমেইল
        ঠিকানা নেওয়া হয়।
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">আপনার অধিকার</h2>
      <p>
        আপনি প্রোফাইল পেজ থেকে আপনার নাম হালনাগাদ করতে পারেন। আপনার অ্যাকাউন্ট ও
        তথ্য মুছে ফেলতে চাইলে নিচের ইমেইলে যোগাযোগ করুন।
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">যোগাযোগ</h2>
      <p>
        গোপনীয়তা নিয়ে কোনো প্রশ্ন থাকলে লিখুন:{' '}
        <a className="text-emerald-700 underline" href="mailto:orjodasutshab@gmail.com">
          orjodasutshab@gmail.com
        </a>
      </p>

      <p className="mt-10">
        <a className="text-emerald-700 underline" href="/">
          ← হোম পেজে ফিরে যান
        </a>
      </p>
    </article>
  );
}
