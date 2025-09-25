export interface GlossaryTerm {
  term: string;
  definition: string;
}

export const glossaryData: GlossaryTerm[] = [
    {
    term: 'Adware',
    definition: 'Short for "advertising-supported software," it is software that generates revenue for its developer by automatically generating online advertisements in the user interface of the software or on a screen presented to the user during the installation process.',
  },
  {
    term: 'Advanced Persistent Threat (APT)',
    definition: 'A stealthy threat actor, typically a nation-state or state-sponsored group, which gains unauthorized access to a computer network and remains undetected for an extended period.',
  },
  {
    term: 'Air-Gapped Backup',
    definition: 'A backup copy of data that is kept physically isolated from any network, providing a high degree of protection against online threats like ransomware.',
  },
  {
    term: 'Black Hat Hacker',
    definition: 'A hacker who violates computer security for personal gain or malicious intent.',
  },
  {
    term: 'Botnet',
    definition: 'A network of private computers infected with malicious software and controlled as a group without the owners\' knowledge, e.g., to send spam or launch DDoS attacks.',
  },
  {
    term: 'Brute Force Attack',
    definition: 'A password cracking method that involves systematically trying all possible combinations of letters, numbers, and symbols.',
  },
  {
    term: 'Caller ID Spoofing',
    definition: 'The practice of causing the telephone network to display a number on the recipient\'s caller ID display that is not that of the actual originating station. Commonly used in vishing attacks.',
  },
  {
    term: 'Credential Stuffing',
    definition: 'An automated attack where stolen account credentials (usernames/passwords) from one data breach are used to gain unauthorized access to user accounts on other services.',
  },
  {
    term: 'Cross-Site Scripting (XSS)',
    definition: 'A type of security vulnerability typically found in web applications. XSS attacks enable attackers to inject client-side scripts into web pages viewed by other users.',
  },
  {
    term: 'Cryptojacking',
    definition: 'The unauthorized use of someone else\'s computer to mine cryptocurrency.',
  },
  {
    term: 'Cyber Espionage',
    definition: 'The use of computer networks to gain illicit access to confidential information, typically held by a government or other organization.',
  },
  {
    term: 'Data Breach',
    definition: 'A security incident in which sensitive, protected, or confidential data is copied, transmitted, viewed, stolen, or used by an individual unauthorized to do so.',
  },
  {
    term: 'Denial-of-Service (DoS)',
    definition: 'A cyber-attack in which the perpetrator seeks to make a machine or network resource unavailable to its intended users by temporarily or indefinitely disrupting services of a host connected to the Internet.',
  },
  {
    term: 'Dictionary Attack',
    definition: 'A password cracking method that tries dictionary words, common phrases, and simple variations.',
  },
  {
    term: 'Distributed Denial-of-Service (DDoS)',
    definition: 'A DoS attack where the attack traffic originates from many different sources (a botnet), making it harder to block.',
  },
  {
    term: 'DMARC, DKIM, SPF',
    definition: 'Email authentication methods that help protect against email spoofing and phishing. SPF specifies allowed mail servers, DKIM provides a digital signature, and DMARC defines policies for handling failures.',
  },
  {
    term: 'Grey Hat Hacker',
    definition: 'A hacker who is a blend of both black hat and white hat hackers. They may hack into a system to notify the administrator of a defect, but do so without permission.',
  },
  {
    term: 'Identity Theft',
    definition: 'The fraudulent acquisition and use of a person\'s private identifying information, usually for financial gain.',
  },
  {
    term: 'Insider Threat',
    definition: 'A security risk that originates from within the targeted organization, often from an employee or former employee with authorized access.',
  },
  {
    term: 'Malware',
    definition: 'Short for "malicious software," it refers to any software intentionally designed to cause damage to a computer, server, client, or computer network.',
  },
  {
    term: 'Man-in-the-Middle (MITM) Attack',
    definition: 'An attack where the attacker secretly relays and possibly alters the communication between two parties who believe they are directly communicating with each other.',
  },
  {
    term: 'Multi-Factor Authentication (MFA)',
    definition: 'A security process where users provide two or more verification factors to gain access to a resource, such as an application, online account, or a VPN.',
  },
  {
    term: 'Parameterized Queries',
    definition: 'A security measure against SQL Injection where query parameters are sent to the database separately from the SQL command, ensuring they are treated as data and not executable code.',
  },
  {
    term: 'Password Hashing',
    definition: 'The process of transforming a password into a short, fixed-length string of characters (a hash) which is then stored. It\'s a one-way function, meaning the original password cannot be easily retrieved.',
  },
  {
    term: 'Phishing',
    definition: 'A type of social engineering attack often used to steal user data, including login credentials and credit card numbers. It occurs when an attacker, masquerading as a trusted entity, dupes a victim into opening an email, instant message, or text message.',
  },
  {
    term: 'Pretexting',
    definition: 'A form of social engineering where an attacker creates a fabricated scenario (a pretext) to gain a victim\'s trust and manipulate them into divulging information.',
  },
  {
    term: 'Ransomware',
    definition: 'A type of malware that threatens to publish the victim\'s personal data or perpetually block access to it unless a ransom is paid.',
  },
    {
    term: 'Ransomware-as-a-Service (RaaS)',
    definition: 'A business model where ransomware developers lease their tools on the dark web to other criminals in exchange for a fee or a cut of the profits.',
  },
  {
    term: 'Salt (Cryptography)',
    definition: 'Random data that is used as an additional input to a one-way function that "hashes" a password. Salting defends against pre-computed hash attacks like rainbow tables.',
  },
  {
    term: 'Smishing',
    definition: 'Phishing attacks conducted using SMS (Short Message Service) text messages.',
  },
  {
    term: 'Software Bill of Materials (SBOM)',
    definition: 'A formal record containing the details and supply chain relationships of various components used in building software.',
  },
  {
    term: 'Spear Phishing',
    definition: 'A targeted phishing attack that uses personalized information to make the fraudulent message seem more credible and convincing.',
  },
  {
    term: 'Spyware',
    definition: 'Malware designed to secretly monitor a victim\'s activities, such as recording keystrokes, capturing screenshots, and harvesting credentials.',
  },
  {
    term: 'SQL Injection',
    definition: 'A code injection technique used to attack data-driven applications, in which malicious SQL statements are inserted into an entry field for execution (e.g., to dump the database contents to the attacker).',
  },
  {
    term: 'Supply Chain Attack',
    definition: 'An attack that targets a trusted third-party vendor or supplier who offers services or software, compromising a weaker link to gain access to their ultimate target.',
  },
  {
    term: 'Trojan (Trojan Horse)',
    definition: 'Malware that disguises itself as something legitimate and harmless. Once a user is tricked into running it, the Trojan unleashes its malicious payload.',
  },
  {
    term: 'User and Entity Behavior Analytics (UEBA)',
    definition: 'A cybersecurity process that monitors the normal behavior of users and then detects anomalous activities, which could indicate a threat.',
  },
  {
    term: 'Virus',
    definition: 'A type of malware that, when executed, replicates by inserting copies of itself into other computer programs or files. It requires a host to survive and human action to spread.',
  },
  {
    term: 'Vishing',
    definition: 'Voice phishing; a social engineering attack conducted over the phone to trick victims into revealing sensitive information.',
  },
  {
    term: 'Web Application Firewall (WAF)',
    definition: 'A firewall that monitors, filters, or blocks HTTP traffic to and from a web application. It is designed to protect against attacks like XSS and SQL Injection.',
  },
  {
    term: 'Whaling',
    definition: 'A highly targeted spear phishing attack aimed at senior executives (the "big fish") in an organization.',
  },
  {
    term: 'White Hat Hacker',
    definition: 'An ethical hacker who uses their skills to find and fix security vulnerabilities with permission from the system owner.',
  },
  {
    term: 'Worm',
    definition: 'A standalone piece of malware that can replicate itself and spread to other computers without any human interaction, typically by exploiting network vulnerabilities.',
  },
  {
    term: 'Zero-Click Exploit',
    definition: 'A highly sophisticated attack that requires no user interaction whatsoever to infect a device, making it extremely difficult to prevent.',
  },
  {
    term: 'Zero-Day Exploit',
    definition: 'An attack that leverages a security vulnerability on the same day that the vulnerability becomes generally known to the vendor, leaving them with "zero days" to create a patch.',
  },
];
