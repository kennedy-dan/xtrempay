import React from "react";
import { Check } from "lucide-react";
import Layout from "@/components/Layout/Layout";

const TermsAndConditions = () => {
  return (
    <Layout>
    <div className="pt-40 md:px-24 px-5 space-y-6 font-Poppins">
      <div className="md:flex justify-between items-start gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Terms & Conditions
          </h1>

          <div className="prose prose-gray">
            <p className="text-gray-600 mb-4">
              These terms and conditions govern your banking relationship with
              Xtrempay, a product of Village Assist Nigeria Limited (registered
              with the Corporate Affairs Commission under RC-1805693). By
              opening an account with us, you agree to abide by these terms and
              conditions, as well as the following policies incorporated by
              reference:
            </p>

            <ul className="list-none space-y-2 mb-6">
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-gray-400">(a)</span> Privacy Policy
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-gray-400">(b)</span> Cookies Policy
              </li>
            </ul>
          </div>
        </div>

        <div className="block">
          <img src='/images/tac.png' />
        </div>
      </div>
      <p className="text-gray-600 text-sm">
        If you disagree with these terms, please exit the Xtrempay mobile
        application or website immediately and refrain from proceeding with the
        account opening process. Xtrempay reserves the right to terminate your
        relationship with us if any of these terms are violated.
      </p>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Interpretation
          </h2>
          <p className="text-gray-600">
  For clarity, &ldquo;You,&rdquo; &ldquo;Your,&rdquo; or &ldquo;Customer&rdquo; refers to the individual
  entering into a banking relationship with Xtrempay and agreeing to
  these terms, while &ldquo;We,&rdquo; &ldquo;Us,&rdquo; or &ldquo;Our&rdquo; refers to Xtrempay or any
  entity to which our rights may be assigned.
</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Purpose of the Relationship
          </h2>
          <p className="text-gray-600">
            The purpose of establishing a relationship with Xtrempay is to
            access the financial services we offer, including wallet management,
            savings, credit facilities, bill payments, and other legally
            permitted services. Your account can be managed through the Xtrempay
            App, which requires a smartphone with an active phone number that
            meets our minimum technical specifications (iOS/Android) and
            supports the latest app version.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Applicability of Terms
          </h2>
          <p className="text-gray-600">
            These terms apply when you open an account with Xtrempay and an
            account number is generated for you. We may update these terms to
            reflect changes in our services, business practices, or applicable
            laws. Notifications of any updates will be provided via our website
            or app, and your continued use of our services constitutes
            acceptance of the revised terms. If you do not accept any updates,
            you should discontinue use of Xtrempay services.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Scope of Relationship
          </h2>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-900">
              Account Opening
            </h3>

            <p className="text-gray-600">
              Access to Xtrempay services requires you to meet our onboarding
              and Know-Your-Customer (KYC) requirements in compliance with
              applicable laws. At a minimum, you must:
            </p>

            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2"></div>
                <span>Be at least 18 years old</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2"></div>
                <span>Be a Nigerian citizen</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2"></div>
                <span>Meet the technological requirements described above</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2"></div>
                <span>Have not already opened an account with us</span>
              </li>
            </ul>

            <p className="text-gray-600">
              Failure to meet these conditions will disqualify you from
              accessing our services. Xtrempay reserves the right to review and
              update these requirements periodically in accordance with
              regulations.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Verification of Identity
          </h2>

          <div className="space-y-4">
            <p className="text-gray-600">
              To prevent fraud, money laundering, and terrorist financing,
              Xtrempay applies due diligence measures, including identity
              verification and collection of information related to your
              intended use of our services. At a minimum, you are required to
              provide:
            </p>

            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2"></div>
                <span>An active phone number</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2"></div>
                <span>A profile picture</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2"></div>
                <span>A Bank Verification Number (BVN)</span>
              </li>
            </ul>

            <p className="text-gray-600 mt-4">
              Accounts are categorized into tiers with corresponding
              documentation requirements:
            </p>

            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2"></div>
                <span>Tier 1: Name, phone number, email</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2"></div>
                <span>Tier 2: Name, phone number, email, selfie, BVN</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2"></div>
                <span>
                  Tier 3 (Full KYC): Name, phone number, selfie, BVN, NIN,
                  residential address
                </span>
              </li>
            </ul>

            <p className="text-gray-600">
              You are responsible for ensuring that all information and
              documentation provided to us is accurate and up to date. Any
              changes or inaccuracies must be promptly corrected. We may share
              your information with third parties, including government
              agencies, for verification purposes. By opening an account, you
              consent to these verification processes and agree to indemnify
              Xtrempay against any claims arising from the reliance on your
              submitted information.
            </p>

            <p className="text-gray-600">
              Failure to update your identification details as required may
              result in restricted account access. If your account opening
              application is successful, we will confirm the creation of your
              account via the Xtrempay App or email. Once activated, you can log
              in to manage your account through the app or website.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Spending Account
          </h2>

          <p className="text-gray-600 mb-4">
            After successfully completing our KYC and AML checks, we will create
            an account for you and provide you with a unique bank account
            number. Within the limits of your Xtrempay Account, you can receive
            funds via bank transfers from third parties or fund the account
            yourself using the options available on the Xtrempay App. From this
            account, you can perform various financial transactions, including
            instant bank transfers, bill payments (e.g., airtime, electricity),
            and managing your Xtrempay Card. All transactions are subject to the
            terms and conditions outlined here. Please note, however, that this
            account does not accrue interest.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Account Limits
          </h2>

          <p className="text-gray-600 mb-4">
            Transactions within your Xtrempay Spending Account are subject to
            certain limits, as detailed in the table below. These limits may
            change based on applicable laws, regulatory requirements, or our
            internal policies:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200 text-sm font-semibold text-gray-700">
                    Parameter
                  </th>
                  <th className="text-left p-3 border border-gray-200 text-sm font-semibold text-gray-700">
                    T1
                  </th>
                  <th className="text-left p-3 border border-gray-200 text-sm font-semibold text-gray-700">
                    T2
                  </th>
                  <th className="text-left p-3 border border-gray-200 text-sm font-semibold text-gray-700">
                    T3
                  </th>
                  <th className="text-left p-3 border border-gray-200 text-sm font-semibold text-gray-700">
                    Xtrempay Business
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    Single Inflow Limit
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    ₦50,000
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    ₦100,000
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    Unlimited
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    Unlimited
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    Cumulative Balance Limit
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    ₦200,000
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    ₦500,000
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    Unlimited
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    Unlimited
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    Single Transfer Limit
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    ₦50,000
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    ₦100,000
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600 whitespace-pre-wrap">
                    ₦1,000,000 (Default) Up to ₦2,000,000 (with indemnity) Up to
                    ₦5,000,000 (with EDD and compliance approval)
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600 whitespace-pre-wrap">
                    ₦5,000,000 Up to ₦10,000,000 (with indemnity) Up to
                    ₦250,000,000 (with EDD and compliance approval)
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    Daily Transfer Limit
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    ₦500,000
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    ₦1,000,000
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600 whitespace-pre-wrap">
                    ₦2,000,000 (Default) Up to ₦10,000,000 (with indemnity)
                    Above ₦10,000,000 (with EDD and compliance approval)
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600 whitespace-pre-wrap">
                    ₦25,000,000 Up to ₦50,000,000 (with indemnity) Up to
                    ₦250,000,000 (with EDD and compliance approval)
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    Single Airtime Limit
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    ₦10,000
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    ₦20,000
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    ₦50,000
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    ₦50,000
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    Daily Airtime Limit
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    ₦100,000
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    ₦150,000
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    ₦200,000
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    Unlimited
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    Single Bills Payment (Betting)
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    ₦10,000
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    ₦20,000
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    ₦50,000
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    ₦50,000
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    Daily Bills Payment (Betting)
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    ₦150,000
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    ₦250,000
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    ₦5,000,000
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    Unlimited
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    Single Bills Payment
                    <br />
                    (Others - power, cable TV, etc.)
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    As defined by service provider
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    As defined by service provider
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    As defined by service provider
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    As defined by service provider
                  </td>
                </tr>

                <tr>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    Daily Bills Payment
                    <br />
                    (Others - power, cable TV, etc.)
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    As defined by service provider
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    As defined by service provider
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    As defined by service provider
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    As defined by service provider
                  </td>
                </tr>

                <tr>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    Daily Gift Cards Limit
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    Not Applicable
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    Not Applicable
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    ₦5,000,000
                  </td>
                  <td className="p-3 border border-gray-200 text-sm text-gray-600">
                    Not Applicable
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 mt-4">
            Transactions exceeding these limits may be declined or held, in
            compliance with these terms. To process such transactions, you may
            need to upgrade your account accordingly.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Liability
          </h2>

          <div className="space-y-4 text-gray-600">
            <p>
              Unless you have acted fraudulently, negligently, or in breach of
              these terms and conditions, you will not be held responsible for
              any unauthorized transactions on your account that occur after you
              have promptly notified us of the loss, theft, misuse, or
              unauthorized use of the Xtrempay App.
            </p>

            <p>
              We are not responsible for the actions or omissions of any
              third-party partner, including their officers, employees, or
              agents, regarding the performance of services under third-party
              terms. Additionally, we are not liable for any non- execution or
              defective execution of a transaction if it was based on an
              incorrect unique identifier provided by you.
            </p>

            <p>
              If a payment was executed correctly and within the required time
              frame, and the payees payment service provider received the
              payment, we are not liable for the proper execution of the
              instruction. However, upon your request, we will take reasonable
              steps to trace any non-executed or improperly executed
              transactions that have been transferred to a fraudulent account
              and will inform you of the results.
            </p>

            <p className="font-medium">We are not responsible for:</p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Delays or failures in fulfilling our obligations under this
                agreement caused by factors beyond our control, including but
                not limited to third-party actions, bank delays, postal delays,
                technological failures, emergencies, natural disasters, or other
                unforeseen circumstances.
              </li>

              <li>
                Losses resulting from compliance with applicable laws or
                regulations.
              </li>

              <li>
                Unauthorized transactions on your account caused by the
                compromise of your account details or security information
                unless the compromise is directly due to our actions or
                omissions
              </li>
            </ol>

            <p>
              You agree to accept responsibility for any liabilities, financial
              or otherwise, incurred by Xtrempay, its customers, or third
              parties due to your breach of these terms, your use of Xtrempay
              services, or any use of your Xtrempay account. You further agree
              to reimburse any such liabilities, as permitted by applicable law.
            </p>

            <p>
              You remain responsible for all fees, charges, and obligations
              related to your Xtrempay account, even in cases of termination,
              suspension, or account closure.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Bank Verification Number (BVN) Operations and Watchlist for the
            Nigerian Banking Industry
          </h2>
          <p className="text-gray-600 mb-4">
            By opening an account with Xtrempay:
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>
              (a) You authorize us to impose restrictions on your account and
              report suspected fraudulent activities to relevant law enforcement
              agencies, including the Economic and Financial Crimes Commission
              (EFCC), Nigerian Financial Intelligence Unit (NFIU), and the
              Nigerian Police Force.
            </li>
            <li>
              (b) You consent to us notifying the Nigeria Inter-Bank Settlement
              Systems Plc (NIBSS) to update the Watchlist Database of the
              Nigerian Banking Industry, as well as reporting to the Central
              Bank of Nigeria (CBN) if fraudulent activity is detected in
              connection with your account.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Notifications
          </h2>
          <p className="text-gray-600 mb-4">
            By opening an account, you agree to receive SMS, emails, and push
            notifications from Xtrempay. These notifications are intended solely
            for your use. Xtrempay will not be held liable for any loss or
            damage arising from unauthorized access to the information sent.
          </p>
          <p className="text-gray-600 mb-4">
            Additionally, by opting for push notifications instead of mandatory
            SMS alerts directed by the CBN, you agree to indemnify Xtrempay
            against any losses, damages, or claims that may arise, including
            legal expenses, due to such notifications.
          </p>
          <p className="text-gray-600 mb-4">
            All communications related to these terms and conditions will be
            conducted in English. Notifications may be provided via:
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>(a) The Xtrempay App – when you log in.</li>
            <li>
              (b) Email – sent to your most recently provided email address.
            </li>
          </ul>
          <p className="text-gray-600 mb-4">
            It is your responsibility to ensure that your contact details are up
            to date. If changes occur, you must notify us immediately. Notices
            are deemed received:
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>(a) For emails – on the business day they are sent.</li>
            <li>
              (b) For the Xtrempay App – on the business day you view (or
              accept, if applicable) them through the App.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Intellectual Property
          </h2>
          <p className="text-gray-600 mb-4">
            Xtrempay&rdquo;s website, app, and all related logos, products, and
            services are trademarks or registered trademarks of Xtrempay Africa,
            Village Assist, or their affiliates. You are prohibited from
            copying, imitating, or using these trademarks without prior written
            consent.
          </p>
          <p className="text-gray-600 mb-4">
            All rights to the website, app, and their content belong to Xtrempay
            and its licensors. Product descriptions, pricing, and user reviews
            displayed on third-party websites are provided for informational
            purposes only, and Xtrempay does not guarantee their accuracy,
            completeness, or reliability.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            General Terms
          </h2>
          <p className="text-gray-600">
            1. <strong>Additional Services:</strong> Xtrempay may introduce new
            services via the App or website, which may be subject to separate
            terms. Any new fees associated with such services will be clearly
            communicated, and you will need to opt-in to these services.
          </p>
          <p className="text-gray-600">
            2. <strong>Severability:</strong> If any provision of these terms is
            deemed invalid or unenforceable by a court, the remaining provisions
            will remain valid and enforceable.
          </p>
          <p className="text-gray-600">
            3. <strong>Entire Agreement:</strong> These terms and conditions
            constitute the entire agreement between you and Xtrempay,
            superseding any prior agreements or understandings, whether written
            or oral.
          </p>
          <p className="text-gray-600">
            Funds in your Xtrempay account are protected under the Nigeria
            Deposit Insurance Scheme, subject to limits imposed by the Nigeria
            Deposit Insurance Corporation (NDIC).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Language and Communication
          </h2>
          <p className="text-gray-600">
            Xtrempay will communicate primarily in English and may use emojis or
            colloquial expressions. If you have questions, contact us via email
            at <a href="mailto:help@xtrempay.com">help@xtrempay.com</a> or
            through in-app messages and verified social media handles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Applicable Law and Dispute Resolution
          </h2>
          <p className="text-gray-600">
            These terms and conditions are governed by the laws of the Federal
            Republic of Nigeria. Disputes will be resolved in Nigerian courts,
            but parties must first attempt to resolve issues amicably through
            good faith negotiations.
          </p>
        </section>
      </div>
    </div>
    </Layout>
  );
};

export default TermsAndConditions;
