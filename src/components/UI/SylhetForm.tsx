"use client";

import React, { useState, ChangeEvent } from "react";

// সিলেট বিভাগের ডেটা
const sylhetData = {
  sylhet: {
    district_name: "সিলেট",
    upazilas: [
      "সিলেট সদর",
      "দক্ষিণ সুরমা",
      "বিশ্বনাথ",
      "ওসমানীনগর",
      "বালাগঞ্জ",
      "ফেঞ্চুগঞ্জ",
      "গোলাপগঞ্জ",
      "বিয়ানীবাজার",
      "জৈন্তাপুর",
      "গোয়াইনঘাট",
      "কানাইঘাট",
      "জকিগঞ্জ",
      "কোম্পানীগঞ্জ",
    ],
  },
  moulvibazar: {
    district_name: "মৌলভীবাজার",
    upazilas: [
      "মৌলভীবাজার সদর",
      "শ্রীমঙ্গল",
      "কমলগঞ্জ",
      "কুলাউড়া",
      "বড়লেখা",
      "জুড়ী",
      "রাজনগর",
    ],
  },
  sunamganj: {
    district_name: "সুনামগঞ্জ",
    upazilas: [
      "সুনামগঞ্জ সদর",
      "শান্তিগঞ্জ",
      "ছাতক",
      "জগন্নাথপুর",
      "দিরাই",
      "শাল্লা",
      "তাহিরপুর",
      "বিশ্বম্ভরপুর",
      "ধর্মপাশা",
      "জামালগঞ্জ",
      "দোয়ারাবাজার",
      "মধ্যনগর",
    ],
  },
  habiganj: {
    district_name: "হবিগঞ্জ",
    upazilas: [
      "হবিগঞ্জ সদর",
      "নবীগঞ্জ",
      "বাহুবল",
      "আজমিরীগঞ্জ",
      "বানিয়াচং",
      "লাখাই",
      "চুনারুঘাট",
      "মাধবপুর",
      "শায়েস্তাগঞ্জ",
    ],
  },
};

export default function SylhetForm() {
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [upazilas, setUpazilas] = useState<string[]>([]);

  const handleDistrictChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const districtKey = e.target.value;
    setSelectedDistrict(districtKey);

    if (districtKey && districtKey in sylhetData) {
      setUpazilas(sylhetData[districtKey as keyof typeof sylhetData].upazilas);
    } else {
      setUpazilas([]);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        ঠিকানা নির্বাচন করুন
      </h2>

      <div className="space-y-4">
        {/* বিভাগ (Fixed to Sylhet for this example) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            বিভাগ
          </label>
          <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none">
            <option value="sylhet_div">সিলেট বিভাগ</option>
          </select>
        </div>

        {/* জেলা নির্বাচন */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            জেলা নির্বাচন করুন
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={handleDistrictChange}
            value={selectedDistrict}
          >
            <option value="">-- জেলা বেছে নিন --</option>
            {Object.entries(sylhetData).map(([key, value]) => (
              <option key={key} value={key}>
                {value.district_name}
              </option>
            ))}
          </select>
        </div>

        {/* উপজেলা/থানা নির্বাচন */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            উপজেলা/থানা নির্বাচন করুন
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none disabled:bg-gray-100"
            disabled={!selectedDistrict}
          >
            <option value="">-- উপজেলা বেছে নিন --</option>
            {upazilas.map((upazila) => (
              <option key={upazila} value={upazila}>
                {upazila}
              </option>
            ))}
          </select>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 mt-4">
          সাবমিট করুন
        </button>
      </div>
    </div>
  );
}
