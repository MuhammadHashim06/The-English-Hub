
function PolicySection({ title, content, bulletPoints }) {
  return (
    <div className="mb-6">
      {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
      {content && <p className="mb-2">{content}</p>}
      {bulletPoints && (
        <ul className="list-disc list-inside pl-4">
          {bulletPoints.map((point, index) => (
            <li key={index} className="mb-1">{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PolicySection;

// data/policySections.js
export const collectInformationSections = [
  {
    title: 'Information You Provide Directly to Us',
    content: 'We may collect information that you provide directly to us through:',
    bulletPoints: [
      'Your use of and interactions with the Services',
      'Your use of and interactions with artificial intelligence ("AI") technologies',
      'Your participation in surveys or filling out forms',
      'Your requests for information or support',
      'Your purchases of tutoring services',
      'Your subscription to newsletters',
      'Your registration for contests or promotions'
    ]
  },
  // Add more sections as needed
];

export const useInformationSections = [
  {
    title: 'Business and Commercial Purposes',
    content: 'We may use your information for the following purposes:',
    bulletPoints: [
      'To provide you with the Services',
      'To enable features such as speech recognition and personalized experiences',
      'To respond to your questions or inquiries',
      'To communicate with you about your account and our company',
      'To analyze and improve the Services',
      'To verify your identity',
      'To protect the safety and integrity of our users and Services'
    ]
  },
];

export const disclosureInformationSections = [
  {
    title: 'Disclosure of Your Information',
    content: 'We may disclose your personal information in connection with:',
    bulletPoints: [
      'Affiliates and Subsidiaries',
      'With Your Consent',
      'Service Providers',
      'Professional Advisors',
      'Protection of Cambly and Others',
      'Legal Requirements',
      'Business Transfers'
    ]
  },
];

export const additionalRegionalSections = [
  {
    title: 'European Economic Area, United Kingdom, and Other Regions',
    content: 'You may have certain rights regarding your personal information, including:',
    bulletPoints: [
      'Providing access to information we hold about you',
      'Preventing processing for direct marketing',
      'Updating or rectifying incorrect information',
      'Deleting certain information',
      'Transferring your information to another service provider',
      'Revoking consent for information processing'
    ]
  },
];
