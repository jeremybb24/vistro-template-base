"use client";

import { getTranslation } from "@/i18n";
import Link from "next/link";

export default function PromotionsView() {
  const { t, i18n } = getTranslation();

  return (
    <div>
      <ul className="mb-6 flex space-x-2 rtl:space-x-reverse">
        <li>
          <Link href="#" className="text-primary hover:underline">
            {t("dashboard")}
          </Link>
        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          <span>{t("promotions")}</span>
        </li>
      </ul>
      <div className="mt-4 font-semibold dark:text-white">
        <h2 className="mb-5 text-lg">{t("promotions")}</h2>
      </div>
    </div>
  );
}
