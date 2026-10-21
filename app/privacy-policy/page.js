import PageHeader from '@/components/shared/PageHeader'
import Container from '@/components/shared/Container'

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Vanyata Financial Services how we collect, use and protect your information.',
  alternates: { canonical: '/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="How Vanyata Financial Services collects, uses and safeguards your information."
      />
      <section className="bg-white pb-24 pt-4 sm:pb-28">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-[16px] leading-[1.8] text-brand-secondary/80">
            {/* <p>
              This Privacy Policy content will be provided by Vanyata Financial Services and
              published here.
            </p> */}
            <p>At Vanyata Financial Services Private Limited ("Vanyata", "we", "us" or "our"), we understand that the information you share with us for a loan or insurance requirement is personal and often sensitive. This Privacy Policy explains what information we collect, why we collect it, how we use it, and the choices available to you. It applies to our website and to any interaction you have with our team, whether online, over a phone call, or in person at our office.</p>

    <p>By sharing your information with us or using our website, you agree to the practices described in this Policy. This Policy is published in line with the Information Technology Act, 2000 and the rules made under it for the protection of personal and sensitive personal information.</p>

    <h2>1. Information We Collect</h2>

    <h3>Information You Provide to Us</h3>
    <p>When you approach us for a loan, insurance or advisory requirement, we may ask you for:</p>
    <ul>
        <li>Your name, phone number, email address and residential address</li>
        <li>Your date of birth, occupation and income details</li>
        <li>Identity documents such as PAN and [Aadhaar Omitted]</li>
        <li>Employment or business proof, salary slips, bank statements, income tax returns and financial statements</li>
        <li>Property documents, in the case of home loans or loan against property</li>
        <li>GST returns, Udyam registration or business licences, where relevant to a business or MSME loan</li>
        <li>Details relevant to your insurance requirement, where you approach us for insurance advisory</li>
    </ul>
    <p>We collect only what is reasonably needed to assess your requirement and take your case forward with the relevant bank, NBFC or insurer. Where a particular document is not essential to your case, we will not insist on it.</p>

    <h3>Information Collected Automatically</h3>
    <p>When you visit our website, our server may automatically record certain technical details such as your IP address, browser type, the pages you visit, and the date and time of your visit. This helps us understand how visitors use our website and where we can improve it. This information does not, by itself, identify you personally.</p>

    <h3>Cookies</h3>
    <p>Our website may use cookies, which are small files stored on your device, to remember your preferences and improve your browsing experience. You can choose to disable cookies through your browser settings, though some parts of the website may not function as intended if you do so.</p>

    <h2>2. Why We Collect Your Information</h2>
    <p>We use the information you share with us to:</p>
    <ul>
        <li>Understand your financial profile and identify banks, NBFCs or insurers suited to your requirement</li>
        <li>Prepare and submit your application, along with supporting documents, to the relevant institution</li>
        <li>Communicate with you regarding the status of your application, additional documentation required, or any update from the lender or insurer</li>
        <li>Obtain your credit report from credit information companies, where necessary, to assess your eligibility and present your case accurately to lenders</li>
        <li>Improve our services and understand the kind of assistance our clients typically need</li>
        <li>Comply with any legal, regulatory or statutory obligation that may apply to us</li>
    </ul>
    <p>We do not use your financial documents or personal information for any purpose beyond what is needed to process your requirement, unless you have separately agreed to it.</p>

    <h2>3. How We Share Your Information</h2>
    <p>We may share your information with:</p>
    <ul>
        <li>Banks, NBFCs, insurance companies or other financial institutions that are relevant to processing your loan or insurance requirement</li>
        <li>Credit information companies, for the purpose of retrieving your credit report and score, with your consent</li>
        <li>Professionals such as chartered accountants or valuers, where their input is genuinely required to complete your case</li>
        <li>Government authorities or regulators, where we are legally required to disclose information</li>
        <li>Any party involved in a merger, acquisition or restructuring of our business, in which case we would take reasonable steps to ensure your information continues to be handled in line with this Policy</li>
    </ul>
    <p>We do not sell your personal information to third parties, and we do not share it for unrelated marketing purposes without your consent.</p>

    <h2>4. Consent for Credit Information</h2>
    <p>Where your case requires us to check your credit report or credit score, we will do so only after obtaining your consent, either through a signed form, a digital acknowledgment, or a clear verbal confirmation recorded at the time of consultation. You may withdraw this consent at any time by informing us in writing, though this may affect our ability to continue processing your application.</p>

    <h2>5. How Long We Keep Your Information</h2>
    <p>We retain your personal information for as long as is necessary to complete the service you have approached us for, and thereafter for a reasonable period to handle any follow-up queries, disputes or regulatory requirements that may arise. Where a specific retention period is required under applicable law, we follow that requirement. If you would like your information removed sooner, you may write to us and we will assess the request in line with our legal obligations.</p>

    <h2>6. How We Protect Your Information</h2>
    <p>We take reasonable administrative, technical and physical measures to protect the information you share with us from unauthorised access, misuse, alteration or loss. Access to client documents within our office is restricted to team members directly involved in processing that particular case. While we take these precautions seriously, no method of storage or transmission over the internet can be guaranteed to be completely secure, and we would encourage you to share sensitive documents with us only through the channels we specify.</p>

    <h2>7. Your Rights</h2>
    <p>You have the right to:</p>
    <ul>
        <li>Ask us what personal information we hold about you</li>
        <li>Request correction of any information that is inaccurate or outdated</li>
        <li>Request deletion of your information, subject to our legal and regulatory obligations</li>
        <li>Withdraw any consent you have previously given, such as consent for a credit check</li>
    </ul>
    <p>To exercise any of these rights, please write to us using the contact details provided below.</p>

    <h2>8. Children's Information</h2>
    <p>Our services are meant for individuals who are at least 18 years of age. We do not knowingly collect personal information from anyone below this age. If we become aware that we have inadvertently collected such information, we will take steps to delete it.</p>

    <h2>9. Third-Party Links</h2>
    <p>Our website may contain links to the websites of banks, NBFCs, insurers or other institutions we work with. Once you leave our website, this Privacy Policy no longer applies. We would encourage you to review the privacy practices of any third-party website before sharing information with it.</p>

    <h2>10. Changes to This Policy</h2>
    <p>We may revise this Privacy Policy from time to time to reflect changes in our practices or in applicable law. Any revision will be posted on this page along with the updated date. We encourage you to review this Policy periodically.</p>

    <h2>11. Grievances and Contact</h2>
    <p>If you have any concern about how your information has been collected or used, or any question about this Policy, please reach out to us at:</p>
    
    <p>
        <strong>Vanyata Financial Services Private Limited</strong>
        <br></br>
        Office No. 216, Paras Chamber, 2nd Floor, Above Bank of India, Behind Laxminarayan Theatre, Swargate, Parvati, Pune – 411009
    </p>

    <p>
        Email: contact@vanyatafs.com
        <br></br>
        Phone: +91 9119464500
    </p>

    <p>We will do our best to address your concern within a reasonable time.</p>

          </div>
        </Container>
      </section>
    </>
  )
}
