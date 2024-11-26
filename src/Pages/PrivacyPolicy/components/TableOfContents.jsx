function TableOfContents() {
  const sections = [
    { id: 'information-collection', label: 'The Information We Collect' },
    { id: 'information-use', label: 'How We Use the Information We Collect' },
    { id: 'information-disclosure', label: 'With Whom & Why We Disclose Your Information' },
    // Add more sections as needed
  ];

  return (
    <nav className="mb-8 bg-gray-100 p-4 rounded">
      <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        {sections.map((section, index) => (
          <li key={index}>
            <a 
              href={`#${section.id}`} 
              className="text-blue-600 hover:underline"
            >
              {index + 1}. {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TableOfContents;