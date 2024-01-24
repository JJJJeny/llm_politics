import { lusitana } from '@/app/ui/fonts';

export default function Protected() {
    return (
        <main className="flex flex-col min-h-screen p-6">
            <div className="flex items-end justify-between h-20 shrink-0 rounded-lg bg-gray-500 p-4 md:h-52">
                <p className={`${lusitana.className} text-xl text-white md:text-3xl md:leading-normal`}>
                    <strong>Welcome to LLM_Politics</strong>
                </p>

            </div>

            <div className="mt-4 mb-8 ml-10 mr-10 flex grow flex-col bg-gray-100 p-4 md:flex-row">
                <div className="overflow-y-auto h-96">
                    <section>
                        <h2 className="text-2xl font-bold text-black md:text-3xl">Informed Consent</h2>
                        <p className="mt-2 text-lg text-black md:text-xl">
                            You must be over the age of 20 and possess the citizenship of the Republic of China to participate in this study. The purpose of this research is to understand the behavioral performance related to human-machine collaborative decision-making. The research process includes three stages:

                            The first stage involves filling out a questionnaire about personal information, political participation, preferences, political issue awareness, and your preferences for trusting machines.
                            In the second stage, you will provide your preferences and opinions on various political views. During this stage, you will also receive information from the Artificial Intelligence Chatbot: ChatGPT.
                            The third stage involves revisiting your voting intentions.
                            This study does not offer any financial compensation. The benefit for participants is gaining a better understanding of candidates political views to aid in voting decisions. There are no foreseeable risks, and no compensation or insurance is provided. You are free to decide whether to participate in the study, and you can close the questionnaire window at any time to withdraw from participation. Since this study is anonymous, participants do not need to contact the researchers to withdraw. Withdrawing from the study will not result in any negative consequences or impact on how the project leader evaluates participants, nor will it affect any of your rights.

                            All research participation data will be anonymized and stored by the Model Construction and Information Lab at the Department of Psychology, National Taiwan University. Data will be retained until December 31, 2024, after which it will be deleted, and the hard drive will be formatted. This experimental data will be used solely for publishing academic research papers, academic presentations, and submissions to academic conferences. The publication of research results will not disclose the identities of research participants or present identifiable personal outcomes. Your email address will only be used for follow-up inquiries. This research is intended solely for academic research purposes and does not involve any commercial interests.

                            If you have any questions or wish to withdraw your consent regarding the research content and related information, please contact Project Leader Huang Congren at (02)3366-3104.

                            The funding for this research is self-funded, and the research project has been reviewed and approved by the Ethics Committee for Behavioral and Social Sciences Research at National Taiwan University. The review covers assessments of interests, risks, participant care, and privacy protection, and it has received approval. The committee operates in accordance with regulations and has been audited and certified by the central purpose-oriented agency. If you have any questions during the research process or believe that your rights have been affected or harmed, you can directly contact the Research Ethics Center at National Taiwan University at the following phone numbers: (02)3366-9956 or (02)3366-9980.

                        </p>
                    </section>
                </div>

            </div>
            <button className="ml-10 mr-10 px-4 py-2 bg-blue-800 text-white rounded hover:bg-black transition duration-300">
                I agree to participate in this study
            </button>
        </main>
    );
}
