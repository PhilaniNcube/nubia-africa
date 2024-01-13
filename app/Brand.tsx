import Image from 'next/image';


export default function Brand() {
  return (
    <div className="container mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 pb-10 lg:pb-20">
        <div className="flex flex-col items-start justify-start space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
          <p className="font-medium text-gray-700 text-md">
            Nubia Associates is an accounting and tax advisory firm specializing
            in providing comprehensive accounting and tax services to
            individuals and businesses. With a team of experienced accountants
            and tax professionals, we aim to assist our clients in navigating
            the complex and ever-changing accounting and tax landscape, ensuring
            compliance with accountings standards and tax laws and maximizing
            tax savings opportunities.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">Mission</h2>
          <p className="font-medium text-gray-700 text-md">
            Our mission is to assist our clients to optimize their compliance
            status and support them in adopting statutory requirements in the
            accounting and taxation regulatory landscape. We pride ourselves on
            our commitment to delivering exceptional service and building
            long-term relationships with our clients based on trust, integrity,
            and confidentiality.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">Brand Promise</h2>
          <p className="font-medium text-gray-700 text-md">
            Our brand promise is to understand and meet our clients&apos; needs.
            Our enduring strength is being a trusted brand that is capable of
            serving clients&apos; needs.
          </p>
        </div>
      </div>

    </div>
  );
}
