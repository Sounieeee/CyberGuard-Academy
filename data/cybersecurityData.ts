import { Lesson } from '../types';

export const cybersecurityData: Lesson[] = [
  {
    id: 'malware-attacks',
    title: 'Malware Attacks',
    description: 'Learn about different types of malware and their characteristics.',
    sources: ['ScienceDirect', 'MDPI', 'Kaspersky', 'CISA'],
    imageUrl: '/images/Malware Attacks.jpg',
    readingTime: 15,
    attackTypes: [
      { type: 'Ransomware', description: 'Malware that encrypts files and demands payment for decryption.', example: 'The WannaCry ransomware attack in 2017 affected over 200,000 computers.', prevention: 'Regular backups, keep software updated, use anti-ransomware tools.', imageUrl: '/images/ransomware.png' },
      { type: 'Virus', description: 'Self-replicating malware that needs a host program.', example: 'The ILOVEYOU virus in 2000 caused billions in damage.', prevention: 'Use antivirus software and avoid suspicious downloads.', imageUrl: '/images/Virus.png' },
      { type: 'Worm', description: 'Self-replicating malware that spreads independently.', example: 'The Stuxnet worm targeted industrial control systems.', prevention: 'Keep systems patched and use firewalls.', imageUrl: '/images/Worm.png' },
      { type: 'Trojan', description: 'Malware disguised as legitimate software.', example: 'Zeus Trojan stole banking credentials from millions.', prevention: 'Only download software from trusted sources.', imageUrl: '/images/Trojan.png' },
      { type: 'Spyware', description: 'Software that secretly monitors user activity.', example: 'Pegasus spyware can access everything on infected phones.', prevention: 'Use anti-spyware tools and review app permissions.', imageUrl: '/images/Spyware.png' },
      { type: 'Adware', description: 'Software that displays unwanted advertisements.', example: 'Fireball adware infected over 250 million computers.', prevention: 'Use ad-blockers and be careful with free software.', imageUrl: '/images/adware.png' },
      { type: 'Cryptojacking', description: 'Unauthorized use of computing resources for cryptocurrency mining.', example: 'The Coinhive script was used to mine Monero on victims browsers.', prevention: 'Monitor CPU usage and use mining blockers.', imageUrl: '/images/Cryptojacking.png' }
    ],
    references: [
      { text: '"Systematic Review: Malware Detection and Classification" — MDPI', url: 'https://www.mdpi.com/2076-3417/11/21/10137' },
      { text: '"Understanding Malware: A Guide" - ResearchGate', url: 'https://www.researchgate.net/publication/344445851' },
      { text: 'CISA: Ransomware Guide', url: 'https://www.cisa.gov/stopransomware' },
      { text: 'Malwarebytes Labs Blog', url: 'https://www.malwarebytes.com/blog' }
    ],
    quiz: [
      {
        question: 'What type of malware spreads across networks without human interaction?',
        options: ['Virus', 'Trojan', 'Worm', 'Spyware'],
        correctAnswer: 'Worm',
        explanation: 'Worms are self-replicating and can spread automatically through networks without requiring host programs.'
      },
      {
        question: 'Which is the most effective defense against ransomware attacks?',
        options: ['Antivirus software', 'Firewall', 'Regular offline backups', 'Complex passwords'],
        correctAnswer: 'Regular offline backups',
        explanation: 'Offline (air-gapped) backups ensure data recovery even if systems are encrypted by ransomware.'
      },
      {
        question: 'The WannaCry attack is an example of what type of malware?',
        options: ['Spyware', 'Ransomware', 'Worm', 'Trojan'],
        correctAnswer: 'Ransomware',
        explanation: 'WannaCry was a notorious ransomware attack that affected organizations worldwide in 2017.'
      },
      {
        question: 'What is the main characteristic of a Trojan?',
        options: ['Self-replication', 'Data encryption', 'Disguise as legitimate software', 'Network spreading'],
        correctAnswer: 'Disguise as legitimate software',
        explanation: 'Trojans deceive users by appearing as legitimate software while containing malicious code.'
      },
      {
        question: 'How does spyware typically enter a system?',
        options: ['Through email attachments', 'Bundled with legitimate software', 'Network vulnerabilities', 'Operating system flaws'],
        correctAnswer: 'Bundled with legitimate software',
        explanation: 'Spyware often comes bundled with legitimate-looking software or free downloads.'
      },
      {
        question: 'What is a key indicator of cryptojacking?',
        options: ['Pop-up ads', 'Encrypted files', 'High CPU usage', 'System crashes'],
        correctAnswer: 'High CPU usage',
        explanation: 'Cryptojacking malware uses significant CPU resources for mining cryptocurrency.'
      },
      {
        question: 'The ILOVEYOU malware from 2000 is an example of which type?',
        options: ['Worm', 'Virus', 'Trojan', 'Ransomware'],
        correctAnswer: 'Virus',
        explanation: 'ILOVEYOU was a virus that required users to open an infected email attachment to spread.'
      },
      {
        question: 'What makes adware different from other types of malware?',
        options: ['It\'s always harmful', 'It focuses on displaying ads', 'It steals data', 'It encrypts files'],
        correctAnswer: 'It focuses on displaying ads',
        explanation: 'Adware\'s primary purpose is to display unwanted advertisements, though some variants can be malicious.'
      },
      {
        question: 'Which malware type is most likely to use a keylogger?',
        options: ['Ransomware', 'Adware', 'Spyware', 'Worm'],
        correctAnswer: 'Spyware',
        explanation: 'Spyware often includes keyloggers to capture sensitive information like passwords.'
      },
      {
        question: 'What is the primary goal of cryptojacking malware?',
        options: ['Steal passwords', 'Mine cryptocurrency', 'Display ads', 'Encrypt files'],
        correctAnswer: 'Mine cryptocurrency',
        explanation: 'Cryptojacking malware hijacks computer resources to mine cryptocurrency for the attacker.'
      },
      {
        question: 'Which malware type typically demands a ransom payment in cryptocurrency?',
        options: ['Spyware', 'Adware', 'Ransomware', 'Worm'],
        correctAnswer: 'Ransomware',
        explanation: 'Ransomware attackers typically demand payment in cryptocurrency for its anonymity.'
      },
      {
        question: 'What is a "polymorphic" virus?',
        options: ['A virus that spreads quickly', 'A virus that changes its code', 'A virus that affects multiple systems', 'A virus that displays ads'],
        correctAnswer: 'A virus that changes its code',
        explanation: 'Polymorphic viruses modify their code to avoid detection by antivirus software.'
      },
      {
        question: 'What is "double extortion" in ransomware attacks?',
        options: ['Encrypting files twice', 'Demanding two payments', 'Encrypting and threatening to leak data', 'Attacking two systems'],
        correctAnswer: 'Encrypting and threatening to leak data',
        explanation: 'Modern ransomware groups both encrypt data and threaten to publish stolen information.'
      },
      {
        question: 'Which best describes a "drive-by download"?',
        options: ['Downloading from official sites', 'Malware that installs without user action', 'Manually downloading malware', 'Downloading from email'],
        correctAnswer: 'Malware that installs without user action',
        explanation: 'Drive-by downloads occur when malware is installed just by visiting an infected website.'
      },
      {
        question: 'What is the main purpose of "fileless malware"?',
        options: ['To avoid detection', 'To save space', 'To spread faster', 'To encrypt files'],
        correctAnswer: 'To avoid detection',
        explanation: 'Fileless malware operates in memory to avoid detection by traditional antivirus software.'
      },
      {
        question: 'Which feature helps worms spread without human intervention?',
        options: ['Social engineering', 'Exploiting vulnerabilities', 'Encrypting files', 'Displaying ads'],
        correctAnswer: 'Exploiting vulnerabilities',
        explanation: 'Worms automatically exploit system or network vulnerabilities to propagate.'
      },
      {
        question: 'What\'s the primary defense against spyware?',
        options: ['Regular backups', 'Monitoring permissions', 'Network firewall', 'Password manager'],
        correctAnswer: 'Monitoring permissions',
        explanation: 'Carefully monitoring and controlling application permissions helps prevent spyware infiltration.'
      },
      {
        question: 'How does rootkit malware typically operate?',
        options: ['At user level', 'At system level', 'In the browser', 'In applications'],
        correctAnswer: 'At system level',
        explanation: 'Rootkits operate at a deep system level, making them particularly difficult to detect and remove.'
      },
      {
        question: 'What is a "logic bomb" in malware?',
        options: ['A type of encryption', 'A trigger condition', 'A spreading mechanism', 'A removal tool'],
        correctAnswer: 'A trigger condition',
        explanation: 'A logic bomb is malicious code that executes when specific conditions are met.'
      },
      {
        question: 'Which malware type is most associated with botnets?',
        options: ['Ransomware', 'Worms', 'Adware', 'Spyware'],
        correctAnswer: 'Worms',
        explanation: 'Worms often create botnets by infecting and controlling multiple systems across networks.'
      }
    ]
  },
  {
    id: 'social-engineering',
    title: 'Social Engineering Attacks',
    description: 'Understanding various social engineering techniques and how to prevent them.',
    sources: ['SANS', 'NIST', 'CISA'],
    imageUrl: '/images/Social Engineering & Phishing.jpg',
    readingTime: 12,
    attackTypes: [
      { type: 'Phishing', description: 'Fraudulent attempts to obtain sensitive information.', example: 'Fake emails claiming to be from banks or services.', prevention: 'Verify sender addresses and don\'t click suspicious links.', imageUrl: '/images/Phishing.png' },
      { type: 'Spear Phishing', description: 'Targeted phishing attacks against specific individuals.', example: 'Customized emails using personal information.', prevention: 'Verify requests through alternative channels.', imageUrl: '/images/Spear Phishing.png' },
      { type: 'Whaling', description: 'Phishing attacks targeting high-level executives.', example: 'CEO fraud requesting urgent wire transfers.', prevention: 'Implement strict financial controls.', imageUrl: '/images/Whaling.png' },
      { type: 'Vishing', description: 'Voice phishing using phone calls.', example: 'Fake tech support calls requesting remote access.', prevention: 'Never give information over unsolicited calls.', imageUrl: '/images/Vhishing.png' },
      { type: 'Smishing', description: 'Phishing through SMS messages.', example: 'Fake package delivery text messages.', prevention: 'Don\'t click links in unexpected texts.', imageUrl: '/images/Smishing.png' },
      { type: 'Pretexting', description: 'Creating a fabricated scenario to obtain information.', example: 'Impersonating IT support to get credentials.', prevention: 'Verify identity through official channels.', imageUrl: '/images/Pretexting.png' }
    ],
    references: [
      { text: 'SANS: Social Engineering: A Practical Guide', url: 'https://www.sans.org/blog/social-engineering/' },
      { text: 'NIST Guidelines for Phishing Prevention', url: 'https://csrc.nist.gov/' },
      { text: 'CISA: Social Engineering Basics', url: 'https://www.cisa.gov/topics/social-engineering' }
    ],
    quiz: [
      {
        question: 'Which type of phishing attack targets specific high-level executives?',
        options: ['Spear Phishing', 'Whaling', 'Vishing', 'Smishing'],
        correctAnswer: 'Whaling',
        explanation: 'Whaling specifically targets executives or high-value individuals with sophisticated attacks.'
      },
      {
        question: 'Voice phishing over the phone is called:',
        options: ['Smishing', 'Pretexting', 'Vishing', 'Whaling'],
        correctAnswer: 'Vishing',
        explanation: 'Vishing (voice phishing) uses phone calls to trick victims into revealing information.'
      },
      {
        question: 'What is the best way to verify a suspicious request from your bank?',
        options: ['Reply to the email', 'Call the number in the email', 'Look up the bank\'s official number and call that', 'Click the link to check'],
        correctAnswer: 'Look up the bank\'s official number and call that',
        explanation: 'Never use contact information provided in suspicious messages; always verify through official channels.'
      }
    ]
  },
  {
    id: 'web-attacks',
    title: 'Web & Network Attacks',
    description: 'Common web and network-based attack vectors.',
    sources: ['OWASP', 'NIST', 'Portswigger'],
    imageUrl: '/images/Network & Web Application Attacks.png',
    readingTime: 10,
    attackTypes: [
      { type: 'SQL Injection', description: 'Inserting malicious SQL code into queries.', example: 'Manipulating database queries to access unauthorized data.', prevention: 'Use prepared statements and input validation.', imageUrl: '/images/SQL Injection.png' },
      { type: 'Cross-Site Scripting', description: 'Injecting malicious scripts into web pages.', example: 'Adding malicious JavaScript to steal cookies.', prevention: 'Sanitize user input and use Content Security Policy.', imageUrl: '/images/Cross-Site Scripting.png' },
      { type: 'Man-in-the-Middle', description: 'Intercepting communications between two parties.', example: 'Intercepting traffic on public Wi-Fi networks.', prevention: 'Use encrypted connections (HTTPS) and VPNs.', imageUrl: '/images/Man-In-The-Middle.png' },
      { type: 'Denial of Service', description: 'Overwhelming systems to make them unavailable.', example: 'Flooding servers with traffic to crash them.', prevention: 'Use DDoS protection and rate limiting.', imageUrl: '/images/Denial of Service.png' }
    ],
    references: [
      { text: 'OWASP Top 10 Web Application Security Risks', url: 'https://owasp.org/www-project-top-ten/' },
      { text: 'PortSwigger Web Security Academy', url: 'https://portswigger.net/web-security' },
      { text: 'NIST Web Security Guidelines', url: 'https://csrc.nist.gov/' }
    ],
    quiz: [
      {
        question: 'What is the primary defense against SQL Injection attacks?',
        options: ['Strong passwords', 'Prepared statements', 'Firewalls', 'Antivirus software'],
        correctAnswer: 'Prepared statements',
        explanation: 'Prepared statements ensure that user input is treated as data, not executable code.'
      },
      {
        question: 'Using HTTPS helps prevent which type of attack?',
        options: ['SQL Injection', 'Cross-Site Scripting', 'Man-in-the-Middle', 'Denial of Service'],
        correctAnswer: 'Man-in-the-Middle',
        explanation: 'HTTPS encrypts traffic, making it much harder for attackers to intercept and read communications.'
      },
      {
        question: 'A DDoS attack aims to:',
        options: ['Steal data', 'Inject malicious code', 'Make a system unavailable', 'Gain admin access'],
        correctAnswer: 'Make a system unavailable',
        explanation: 'Denial of Service attacks overwhelm systems to make them inaccessible to legitimate users.'
      }
    ]
  },
  {
    id: 'advanced-threats',
    title: 'Advanced Persistent Threats',
    description: 'Sophisticated and targeted cyber attacks.',
    sources: ['FireEye', 'Mandiant', 'CrowdStrike'],
    imageUrl: '/images/Cyber Espionage.png',
    readingTime: 14,
    attackTypes: [
      { type: 'Zero-Day Exploits', description: 'Attacking previously unknown vulnerabilities.', example: 'Exploiting new software vulnerabilities before patches.', prevention: 'Use multiple security layers and keep systems updated.', imageUrl: '/images/Zero-Day Exploit.png' },
      { type: 'Supply Chain Attacks', description: 'Compromising software supply chains.', example: 'SolarWinds attack affecting thousands of organizations.', prevention: 'Verify software integrity and monitor vendors.', imageUrl: '/images/Supply Chain Attack.png' },
      { type: 'Insider Threats', description: 'Threats from within an organization.', example: 'Employees misusing access privileges.', prevention: 'Implement access controls and monitoring.', imageUrl: '/images/Insider Threats.png' }
    ],
    references: [
      { text: 'FireEye APT Research', url: 'https://www.fireeye.com/current-threats/apt-groups.html' },
      { text: 'Mandiant Threat Intelligence', url: 'https://www.mandiant.com/resources/insights/apt-groups' },
      { text: 'CrowdStrike Adversary Universe', url: 'https://www.crowdstrike.com/adversaries/' }
    ],
    quiz: [
      {
        question: 'What is a zero-day vulnerability?',
        options: ['A bug that\'s one day old', 'A vulnerability known to the vendor', 'A vulnerability unknown to the vendor', 'A type of virus'],
        correctAnswer: 'A vulnerability unknown to the vendor',
        explanation: 'Zero-day vulnerabilities are unknown to the software vendor and have no patches available.'
      },
      {
        question: 'The SolarWinds attack is an example of:',
        options: ['Zero-day exploit', 'Supply chain attack', 'Insider threat', 'DDoS attack'],
        correctAnswer: 'Supply chain attack',
        explanation: 'Attackers compromised the software supply chain to distribute malicious code to customers.'
      },
      {
        question: 'Which is an example of an insider threat?',
        options: ['A hacker breaking in', 'A virus infection', 'An employee stealing data', 'A power outage'],
        correctAnswer: 'An employee stealing data',
        explanation: 'Insider threats come from people who have legitimate access to systems and resources.'
      }
    ]
  },
  {
    id: 'identity-theft',
    title: 'Identity Theft & Data Breaches',
    description: 'Understanding identity theft and data breach impacts.',
    sources: ['FBI', 'FTC', 'Identity Theft Resource Center'],
    imageUrl: '/images/Identity Theft.png',
    readingTime: 8,
    attackTypes: [
      { type: 'Data Breach', description: 'Unauthorized access to sensitive data.', example: 'Large-scale theft of customer information.', prevention: 'Encrypt sensitive data and monitor access.', imageUrl: '/images/Data Breach.png' },
      { type: 'Identity Theft', description: 'Stealing and using personal information.', example: 'Using stolen credentials for fraud.', prevention: 'Protect personal information and monitor accounts.', imageUrl: '/images/Identity Theft.png' }
    ],
    references: [
      { text: 'FBI Internet Crime Complaint Center (IC3)', url: 'https://www.ic3.gov/' },
      { text: 'FTC Identity Theft Resource', url: 'https://www.identitytheft.gov/' },
      { text: 'Identity Theft Resource Center', url: 'https://www.idtheftcenter.org/' }
    ],
    quiz: [
      {
        question: 'What should you do if you suspect identity theft?',
        options: ['Ignore it', 'Wait and see', 'Contact credit bureaus and the FTC', 'Post about it on social media'],
        correctAnswer: 'Contact credit bureaus and the FTC',
        explanation: 'Quick action through official channels is crucial to minimize damage from identity theft.'
      },
      {
        question: 'Which is a sign of potential identity theft?',
        options: ['Getting spam email', 'Unexpected credit card charges', 'Slow internet', 'Computer updates'],
        correctAnswer: 'Unexpected credit card charges',
        explanation: 'Unauthorized charges are often the first sign that someone has stolen your identity.'
      },
      {
        question: 'What is the best way to protect against identity theft?',
        options: ['Never use credit cards', 'Monitor your accounts regularly', 'Cancel all online accounts', 'Share less on social media'],
        correctAnswer: 'Monitor your accounts regularly',
        explanation: 'Regular monitoring helps detect suspicious activity early when damage can be minimized.'
      }
    ]
  }
];