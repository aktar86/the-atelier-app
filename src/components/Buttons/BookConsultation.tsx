"use client";
import Link from "next/link";

const BookConsultation = () => {
  const hanldeButton = () => {
    alert("This feature is now under maintanance");
  };
  return (
    <Link href="/">
      <button
        onClick={hanldeButton}
        className="w-full h-15 text-secondary bg-primary hover:bg-primary/90 transition-all duration-200 "
      >
        Book Consultation
      </button>
    </Link>
  );
};

export default BookConsultation;
