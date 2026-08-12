/**
 * Verbatim client recommendations from the Spartans Advisors Facebook page,
 * newest first. Do not paraphrase — reproduce the reviewer's own wording.
 * `advisor` is filled in only where the reviewer named one; curly apostrophes
 * are used throughout so the strings need no escaping.
 *
 * These are separate from the per-advisor reviews in `lib/advisors.ts`.
 */
export interface Testimonial {
  name: string
  role?: string
  advisor?: string
  text: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Khoo Qi Wei',
    advisor: 'Xxia',
    text: 'Xxia was very detailed with the informations that was shared with me, she even cleared my doubts.',
  },
  {
    name: 'Hong Kun',
    text: 'He is straightforward and honest!',
  },
  {
    name: 'Ng Ziyang',
    advisor: 'Sijun',
    text: 'Si jun has been helpful in providing valuable financial advice for me',
  },
  {
    name: 'JH Tan',
    advisor: 'Sijun',
    text: 'Didnt experience agent do different insurer policy summary but from Sijun. good experience to find gaps in policies in different insurer I got from, highly recommended! managed to find the gaps holistically and holistic planning is involved!',
  },
  {
    name: 'Joelin Png',
    advisor: 'Sijun',
    text: 'Thanks Master Lai for helping me review and compare my critical illness plans. Really appreciate you taking the time to go through the details and share your thoughts with me. It has given me a much clearer understanding of the coverage and options available.',
  },
  {
    name: 'Asyraf Rahman',
    advisor: 'Irshad',
    text: 'Irshad presented the importance of investing clearly and effectively, especially for beginners. The explanation on how inflation gradually reduces the value of money over time was well supported with relevant statistics and examples. The presentation also gave a good introduction to how investing works and why starting early can make a significant difference through long-term compound growth!',
  },
  {
    name: 'Geron Tan',
    advisor: 'Glenn',
    text: 'Good chat with Glenn, really friendly and helpful throughout my process with spartans',
  },
  {
    name: 'Htet Myat Kyaw',
    advisor: 'Xxia',
    text: 'Had an interesting sharing done by Xxia this morning. Managed to understand more about the different options available for me to invest and grow my money. Would recommend my friends and my family to her!',
  },
  {
    name: 'Lim Jing Yi',
    advisor: 'Xxia',
    text: 'Had an interesting sharing done by Xxia today. Managed to understand more about my insurance plans and how important it is to get sufficient coverage. Would recommend my friends and my family to her!',
  },
  {
    name: 'No Nonsense PT',
    advisor: 'Xxia',
    text: 'I genuinely rejected all of my peers who were in this industry because it was hard to fathom someone who would guide me through what I needed without the pure thought of trying to capitalise on my lack of knowledge. However, after a short conversation with Xxia, who guided me through how to better plan for my finances and prepare for the future, I found it to be a meaningful conversation and I managed to learn so much about protecting my self interests moving into the future and even more so on how to prevent myself from facing huge financial difficulties and challenges. I am glad I made the jump to work with Xxia!',
  },
  {
    name: 'Aaron LS',
    advisor: 'Sijun',
    text: 'Sijun is truly an expert in understanding what is best for me now and also will follow up again to see if anything matches me better',
  },
  {
    name: 'Haikel Solehin',
    advisor: 'Xxia',
    text: 'review for Xxia - knows how to communicate to her clients, brings joy into the conversation so it doesn’t feel boring! backs her topics up with factual information & is also understanding of her clients’ situation. Xxia doesn’t make me feel like a client but rather she is someone who is interested in helping to secure my future financially.',
  },
  {
    name: 'YuhWei Wong',
    advisor: 'Venice & Ryan',
    text: 'Venice and Ryan are very informative when sharing financing opportunities, highly recommend!',
  },
  {
    name: 'Khoo Yu Wen',
    advisor: 'Dovanson',
    text: 'Been a client of Dovanson’s for more than 10 years and counting, awesome service!',
  },
  {
    name: 'Louis Loy',
    advisor: 'Dovanson & Stacy',
    text: 'I am working with Dovanson and Stacy on my family portfolio for 2 years now. They are very detailed and professional. I will strongly recommend Spartan Advisors.',
  },
  {
    name: 'Vanessa Lim',
    text: 'Great agent and nice community',
  },
  {
    name: 'Chris Loh',
    advisor: 'Sijun',
    text: 'Si Jun gives useful zwds insights and financial advices',
  },
  {
    name: 'Briant Sim',
    advisor: 'Glenn',
    text: 'Glenn gave me a very insightful sharing which helped me understand what Spartans Advisors do and how it works',
  },
  {
    name: 'Kai Jian',
    text: 'lovely sharing carried by them!',
  },
  {
    name: 'Chng Zhao Xiang',
    advisor: 'Wei Hao',
    text: 'I recently started working with my new insurance agent Wei hao, and I’m very satisfied with the experience so far. From the first meeting, they were patient, knowledgeable, and took the time to understand my needs before recommending any plans. he explained everything clearly, making it easy for me to compare options and make confident decisions. What I appreciate most is his professionalism and don’t just push for sales',
  },
  {
    name: 'Kim Junghan',
    advisor: 'Glenn',
    text: 'Glenn is a great advisor who’s very patient with someone with no prior knowledge about finances like me, and even goes further beyond to engage me about my personal life and troubles 🙂',
  },
  {
    name: 'Joseph Tay',
    advisor: 'Chermayne & Stacey',
    text: 'Good follow-up and patient explanation of the options and policies! Thanks for all the help, Chermayne and Stacey for helping me to get coverage for my son!',
  },
  {
    name: 'Jesika Lim',
    text: 'Good explanation and friendly quite detailed information and guide well',
  },
  {
    name: 'Roger Chia Tuck Ming',
    text: 'Good and friendly and happy again',
  },
  {
    name: 'EeMay Loy',
    advisor: 'Dovanson',
    text: 'Dovanson is one of the best advisors that I’ve ever met. Extremely reliable and trustworthy. Never need to second guess or worry about any advice given. Genuinely care about future proofing my life.',
  },
  {
    name: 'Wai Lok',
    advisor: 'Stacy & Chermayne',
    text: 'My advisors, Stacy and Chermayne, were very clear in their explanation in their financial advice and were extremely helpful when it came to structuring the plan for me, and guiding me along the way.',
  },
  {
    name: 'Claire Kristine dela Cruz',
    advisor: 'Sijun',
    text: 'Sijun helped me a lot in my huat journey - health protection then to wealth accumulation. Now I feel secure and strong for my health protection and also retirement planning. Highly recommend to meet Sijun for a financial health review and Zi Wei Dou Shu reading. It totally works!',
  },
  {
    name: 'Darren Chow Austria',
    advisor: 'Ryan Tan',
    text: 'Ryan Tan is an exceptionally knowledgeable and patient Financial Advisor. His attention to detail and genuine advice make him truly reliable and trustworthy. I value how he takes the time to understand my priorities and provides clear guidance to help me achieve my financial goals. I’m grateful to have him as my advisor and highly recommend his services.',
  },
  {
    name: 'Cherlyn Chng',
    advisor: 'Dovanson',
    text: 'Dovanson is my advisor. he’s really patient and he puts in effort to meet me after work hours. definitely recommend this guy!',
  },
  {
    name: 'Shu Yen Yu',
    advisor: 'Sijun',
    text: 'Recommend Sijun for his services and advise 👍',
  },
  {
    name: 'Ai Hui Woo',
    advisor: 'Wei Hao',
    text: 'Wei Hao is a great financial advisor, he understand my needs and offers genuine, practical advice. Highly recommend him to anyone looking for a trustworthy and knowledgeable advisor who truly puts clients first!',
  },
  {
    name: 'Christon Chua',
    advisor: 'Glenn',
    text: 'I would like to show my appreciation to Glenn for introducing to me how to improve my financial literacy and recommending them to my friends as well so that they can stretch their dollar!',
  },
  {
    name: 'Elaine Tan',
    advisor: 'Chermayne',
    text: 'I had the pleasure of working with Chermayne, and I couldn’t be happier with her exceptional service! She is knowledgeable, professional, and incredibly patient in addressing all my questions and concerns. Chermayne took the time to understand my needs and provided tailored advice, ensuring I felt confident in my decisions. I highly recommend Chermayne to anyone looking for a reliable and trustworthy insurance agent! 🥰',
  },
  {
    name: 'Benjamin Tok',
    advisor: 'Sijun',
    text: 'Sijun was a kind and helpful advisor who gave me valuable advice in life and financial planning.',
  },
  {
    name: 'Wei Ling',
    advisor: 'Wei Hao',
    text: 'Wei Hao is a friendly and knowledgeable agent who provides excellent service.',
  },
  {
    name: 'Adeline Neo',
    advisor: 'Dovanson',
    text: 'Being knowledgeable about financial planning is the bare minimum for any financial advisor. What sets Dovanson apart is not just his deep expertise, but the pride he takes in his work and the sincerity with which he serves his clients. When I was unsure, he patiently walked me through every option, never pushing, always guiding. He is also generous with his advice and always puts my best interests first. I often tell my family and friends he’s the one and only financial advisor I trust. In this industry, Dovanson is truly one of a kind! 🙌🏼',
  },
  {
    name: 'Jinghong Chua',
    advisor: 'Glenn & Chermayne',
    text: 'I’ve had the pleasure of working with both Glenn and Chermayne, and I can confidently say they have both made a significant difference in my financial planning. They took the time to understand my financial goals and provided clear, tailored advice that helped me make informed decisions about my investments. Their professionalism, responsiveness, and attention to detail gave me peace of mind knowing my financial future is in good hands. Highly recommend for any young adults who are looking for reliable advisors to guide you through your milestones!',
  },
  {
    name: 'Charlotte Yeo',
    advisor: 'Glenn',
    text: 'Glenn is a friendly and informative advisor who wants best for his clients! Highly recommended!',
  },
  {
    name: 'Polly Tian',
    advisor: 'Dovanson',
    text: 'I met Dovanson Quah through a friend of mine and was very impressed by his depth of knowledge in insurance, be it life or general insurance. More importantly, he is very patient, sincere and professional, spending time and effort to help us laymen to understand and after to determine which product suits us the best. Way to go, Dovanson 👍',
  },
  {
    name: 'Shanice Lim',
    advisor: 'Wei Hao',
    text: 'Wei Hao is patient and give properly introduction of himself and project. I trust him and would highly recommend him to anyone in need of financial advice.',
  },
  {
    name: 'May Tjetty',
    advisor: 'Sijun',
    text: 'Sijun is kind, patient and gives sound advise. He doesn’t hard sell but listen to your needs. I trust him and would highly recommend him to anyone in need of sound financial advise.',
  },
  {
    name: 'Yan Ni',
    advisor: 'Alicia',
    text: 'From the start, Alicia made me feel like a priority. During our meetings, she made sure I felt completely at ease and confident in every step of the process. She created a safe and welcoming environment where I felt comfortable sharing my personal details and concerns without any hesitation. Her professionalism and empathy were evident throughout, and she took the time to understand my needs, offering advice and options that truly felt tailored to me. Alicia’s dedication to helping me felt genuine, and I’m so grateful for her assistance.',
  },
  {
    name: 'Zavier Ang',
    advisor: 'Wei Hao',
    text: 'Met up with Wei Hao, get to understand better on life insurance and hospitalisation plan for children.',
  },
  {
    name: 'Ezra Jacobus',
    advisor: 'Shearn & Janet',
    text: 'Happy to have Shearn and Janet as my advisers! I appreciate their time and patience in understanding my financial situation and policies are essential at my current life stage. Knowing that buying insurance is also a big decision, they gave me time and space to make an informed decision and were also very respectful when we discussed about how much budget I was comfortable setting aside for my policies. Highly recommend the two of them 🙂',
  },
  {
    name: 'Stephanie Goh',
    advisor: 'Chermayne',
    text: 'Chermayne is a very patient and informative advisor, she provided me with the best financial advices on what’s best for me. Best advisor I ever met. Highly recommended!',
  },
  {
    name: 'Chen Zhiyuan',
    advisor: 'Wei Hao',
    text: 'Met up with Wei Hao. He was well prepared and provided a lot of valuable insights about financial advice.',
  },
  {
    name: 'Lindy Lee',
    advisor: 'Yvonne & Chermayne',
    text: 'Yvonne and Chermayne always provide me with the best plan they have. And they’re always there to assist whenever I message them.',
  },
  {
    name: 'Ambrose Teo',
    advisor: 'Wei Hao',
    text: 'Wei hao provides very informative introductions to the world of financial planning, and was a pleasure talking to and learning from him!',
  },
  {
    name: 'Elsie Poh',
    advisor: 'Wei Hao',
    text: 'Met up with Wei Hao. He has provided an informative sharing of my existing policies and also new product which caters to my needs. He is knowledgeable and attentive to customers needs. Will definitely engage him further.',
  },
  {
    name: 'Muhd Firdaus',
    advisor: 'Ryan Tan',
    text: 'Would highly recommend my advisor, Ryan Tan. Super diligent, reliable and hardworking. 🤯 10/10',
  },
  {
    name: 'Korbe Lim',
    advisor: 'Sijun',
    text: 'Sijun is a knowledgeable advisor and able to share and help me to analysed my profile and recommend the products that I need.',
  },
  {
    name: 'Sophia Lee',
    advisor: 'Sijun',
    text: 'Lai Sijun gave a good In depth financial planning',
  },
  {
    name: 'Jonathan Gan',
    advisor: 'Wei Hao',
    text: 'Eng wei Hao has an awesome presentation to me. He has put me back to drawing board to reinvent and assess my current and future financial needs. This has helped me to know better and open to ideas where I can focus on like opportunity that I can tap on his on advice and explore further. Definitely I will study and contact him so to allow me to select some financial needs going forward.',
  },
  {
    name: 'Corlissa Ling',
    advisor: 'Dovanson',
    text: 'Met up with Dovanson and he was very detailed and clear with his explanations and insights and is also very patient! 👍🏻',
  },
  {
    name: 'Jerry Hua',
    advisor: 'Wei Hao',
    text: 'Thanks Weihao for presenting me the overview of financial planning. I have gained more knowledge about income allocation and long term planning such as risk management and retirement etc. Weihao also helped me point out what I am lacking in: summary of personal financial expenditure and budgeting.',
  },
  {
    name: 'Teo Thong Thai',
    advisor: 'Sijun',
    text: 'Sijun covers all the gaps in my financial journey and correctly points out where I am lacking coverage. He will try to understand your current situation and goals and point you in the right direction',
  },
  {
    name: 'Ang ZY',
    advisor: 'Glenn & Chermayne',
    text: 'Both Glenn and Chermayne are very informative advisors. Before I met them, I was having difficulty managing my money. They have provided me with the clarity on this matter, as well as helped me to explore the various means of growing my assets, as well as the various levels of risk associated with investing your capital. I highly recommend Spartans Advisors to anybody who is interested in seeking financial advice and how to manage your wealth.',
  },
  {
    name: 'Song Jun Yan',
    advisor: 'Glenn',
    text: 'Glenn was informative about explaining to me the importance of financial planning and risk management and highlighting to me that starting earlier would be more beneficial. Presentation slides and examples were well done to help me understand the concepts of risk management.',
  },
  {
    name: 'Aauguster Auguster',
    advisor: 'Stacy',
    text: 'Very glad to meet with Stacy. Before I met her, I was having difficulty with financial plan. She has provided me with explanations of investing and insurance on this matter. I would definitely recommend her to anybody who needs advice for insurance plan and investment plan.',
  },
  {
    name: 'Marc Clarence',
    advisor: 'Ryan Tan',
    text: 'Ryan tan was an excellent advisor! Highly detailed and informative session for someone getting started with planning ahead. Highly recommend as he takes it beyond the standard to really help you out and see things clearly/easily. Helping you out as best as possible.',
  },
  {
    name: 'Hafiz Solikin',
    advisor: 'Chermayne & Matthias',
    text: 'Before meeting Chermayne & Matthias, I was having difficulty with ways to save money as an NSF. They provided me with insights and even various solutions to this matter. I would definitely recommend him to anybody who needs help or insights as to ways to save money.',
  },
  {
    name: 'Nana Owyong',
    advisor: 'Glenn',
    text: 'had a very session today with Glenn. gained a lot of insightful knowledge about financial planning. 100% recommended! thank you Spartans!',
  },
  {
    name: 'Solihin Ma',
    advisor: 'Glenn',
    text: 'i met with Glenn Tng. As this was my first time meeting up with a FA, He explained how things work such as endowment plans and answered my questions relating to investments',
  },
  {
    name: 'Jun Yang Chua',
    advisor: 'Chermayne & Matthias',
    text: 'Charmayne and Matthias were very informative about ways I could use to grow the money that I’ve saved. They were patient and good listeners in regards to finding out more about my financial health.',
  },
  {
    name: 'Alex Lu',
    advisor: 'Shearn',
    text: 'Shearn was very helpful and provided me with lots of helpful advice regarding my insurances and finances. I truly appreciate the work he put in to help me plan for my future.',
  },
  {
    name: 'Cyna Eun Acacia',
    advisor: 'Sijun',
    text: 'shi jun was thorough and meticulous in his presentation, looking forward to more sharings!',
  },
  {
    name: 'Liang Hong',
    advisor: 'Shearn & Janet',
    text: 'Met with Shearn and Janet for the first time yesterday, in which they were very genuine and customer centric folks. Would definitely recommend the both of them!',
  },
  {
    name: 'Marissa Neo',
    advisor: 'Shearn',
    text: 'Love the service by Shearn! Super informative and gives really good advice!',
  },
  {
    name: 'Eleen Choong',
    advisor: 'Sijun',
    text: 'meet with sijun today. he is really very helpful n knowledge person. he let me know more info n patient. will introduce my friends to him.',
  },
  {
    name: 'Valerie Goh',
    advisor: 'Ryan Tan',
    text: 'Ryan Tan Li Wei was the best advisor I’ve met, very informative and concise w his information. Very engaging session 10/10',
  },
  {
    name: 'Ong Javier',
    advisor: 'Ryan Tan',
    text: 'Ryan Tan Li Wei is the advisor that helped me gain more knowledge on my future plannings and what he does as a financisl advisor. He’s professional, friendly and very understanding towards my life situations.',
  },
  {
    name: 'Shaji Alias',
    text: 'I am happy with Spartans Advisors service and I would like to recommend them.',
  },
  {
    name: 'Ng Wei Chong',
    advisor: 'Ryan Tan',
    text: 'My advisor is Ryan Tan Li Wei, he makes me feel very comfortable about discussing my goals and what I can do to achieve them. Really comforting to see that there are advisors out there that truly care about our well-being! Great advisor and great team! I would definitely recommend!',
  },
  {
    name: 'Weisheng Ho',
    advisor: 'Ryan Tan',
    text: 'My advisor, Ryan Tan, is a dedicated individual. He emphasize the importance of my own financial planning. He makes me feel very comfortable and truly cares about our well being. Highly recommended',
  },
  {
    name: 'Merida Benson',
    advisor: 'Chermayne',
    text: 'I’m happy and satisfied with my financial advisor - Chermayne she was very helpful and knowledgeable with my financial concerns. She is so approachable and anytime can provide you all options on your queries. She is the financial advisors that you really can trust and will care for you. Thanks Spartans... 🥰',
  },
  {
    name: 'Sally Neo',
    advisor: 'Chermayne',
    text: 'Chermayne - my advisor for almost 6 years. Get to know her from a roadshow at Novena. Was not so keen at first but still arranged our first appointment. Chermayne does not ‘hard sell’, she will give advices according to my needs. Now, Chermayne is taking care of my financial plans, insurance coverage and retirement plans etc. Anyone needs advisor - highly recommend Chermayne - honest and diligent advisor!',
  },
  {
    name: 'Khai Hoong Sit',
    advisor: 'Alicia',
    text: 'Happy to have Alicia as my insurance advisor. She was really patient with me on our first appointment, entertaining all of my questions. She is also very responsible and would reach out to me on anything requiring my attention and make it a practice to meet up at least once a year to catch up on things. Very honest and will not oversell insurance. 10 out of 10 would recommend Alicia!',
  },
  {
    name: 'Joanne Chan',
    advisor: 'Dovanson',
    text: 'Dovanson’s extremely knowledgeable about all things related to insurance and investment; he is also easily approachable, patient, and helpful which is great for those who have questions to better understand the various policies that are proposed. It’s been a pleasure working with him!',
  },
  {
    name: 'Yvonne Ho',
    advisor: 'Dovanson',
    text: 'Very happy to have Dovanson looking after me and my family’s portfolio. Makes everything simple to understand. He provides useful solutions taking into consideration all factors for the entire family. Would definitely recommend him for anyone who’s looking to do financial planning. 👍🏻',
  },
  {
    name: 'Dean Ng',
    advisor: 'Chermayne',
    text: 'From a stranger to an advisor to a friend. Before I met Chermayne, I was clueless about how to manage my finances and how I should plan for my future. She has provided me with a clear direction on this matter and offered her honest opinion for what she feels would be best for me. I really appreciate her and would definitely recommend her to anybody who feels lost and just needs a friend to offer some financial guidance in life.',
  },
  {
    name: 'Bryan Ong',
    advisor: 'Chermayne & Janet',
    text: 'Chermayne & Janet were extremely friendly and approachable! They were extremely knowledgeable in terms of finance! I can foresee working with them in the future 🙂 Thank you so much for the fruitful session 😌',
  },
  {
    name: 'Chris Zhuang Xibin',
    advisor: 'Shearn & Janet',
    text: 'Absolutely impressed with the service provided by Shearn and Janet! Their expertise and knowledge of the industry were evident as they patiently answered all my questions and guided me through the process. I truly appreciate their professionalism, and responsiveness. I highly recommend working with them for all your insurance needs!',
  },
  {
    name: 'Keegan Ang',
    advisor: 'Dovanson',
    text: 'Very forthcoming and genuine in their efforts in helping me to achieve my financial goals. Special shoutout to my advisor Dovanson!',
  },
  {
    name: 'Ellis Sim',
    advisor: 'Chermayne',
    text: 'Chermayne: A trustworthy advisor, before I met Chermayne, I was having difficulty with my finances. She has provided me with a lot of good advices and recommendations on this matter. I would definitely recommend her to anybody who needs financial planning.',
  },
  {
    name: 'Esther Leong',
    advisor: 'Shearn & Janet',
    text: 'Shearn and Janet were super patient and detailed when explaining about the different insurance plans. It was a great pleasure working with them and they gave many good advice and suggestions based on my personal needs 🙂 TQ',
  },
  {
    name: 'Fennec Xiaolong Zai',
    advisor: 'Shearn & Janet',
    text: 'Shearn and Janet, my advisors and they were patient in explaining every aspect of my needs. They also shared many useful information and Infographic to help me understand the policies. I have met them couple of times and always enjoyed my time with them :)!!',
  },
  {
    name: 'Augustine Ng',
    advisor: 'Chermayne',
    text: 'Chermayne is a friendly, patient and helpful advisor. Before I met Chermayne, I am not well informed on matters regarding insurance coverage. Chermayne is clear and knowledgeable in clarifying my doubts. She also understands my current needs and requirements. I strongly recommend her to anyone who just started work and looking to be insured.',
  },
  {
    name: 'Joshua Choo',
    advisor: 'Chermayne',
    text: 'Chermayne helped me understand more about the different types of investment as well as paint a clear picture of the impacts of the different types of investment plans. I will definitely recommend to anyone who is unsure and needs a more in depth understanding!',
  },
  {
    name: 'Elvis Wong',
    advisor: 'Cindy',
    text: 'I met up with Cindy today at Nex! Despite her age she spoke boldly and engaging. She is expressive and makes the session comfortable too. She asks guilding questions which helps me to flow together with her and not lost. She helped me see a different perspective in different ages which is my biggest take away. It was a good session with her',
  },
  {
    name: 'Mah Yuen Fone',
    advisor: 'Alicia & Dovanson',
    text: 'I recently had the pleasure of working with Alicia and Donvanson and I couldn’t be more satisfied with the level of service they provided. From the very beginning, they were attentive to my needs and worked diligently to ensure that my financial goals were met.',
  },
  {
    name: 'Yeo Jie Qi Jayce',
    advisor: 'Dovanson & Alicia',
    text: 'My advisors, Dovanson and Alicia were clear and patient in explaining my coverage, and they also shared very useful information to help my partner and I for our financial planning. They were very opened to answer my questions and I always enjoyed my sessions with them!',
  },
  {
    name: 'Elson Pang',
    advisor: 'Dovanson',
    text: 'Dovanson made presentation clear and insightful and made me understand the coverage and what i was getting. Would recommend',
  },
  {
    name: 'Caroline Joy Tang',
    advisor: 'Shearn & Cindy',
    text: 'Shern & Cindy made the presentation experience easy, fun & light-hearted, giving me opportunities to interact & ask questions on the different products & services Spartans serviced & provided. Overall it was a really good presentation & also looking forward to our next meeting again. Thanks again Shern & Cindy!',
  },
  {
    name: 'Alicia Sim',
    advisor: 'Shearn & Janet',
    text: 'Shearn and Janet were friendly, patient and helpful in helping me understand the policies and coverage that I needed. Thank you!',
  },
  {
    name: 'Peter Tan Li Ann',
    advisor: 'Grace',
    text: 'Great experience with my advisor Grace, many interesting insights and suggestions given. She is also friendly and comfortable to communicate with. Helped me a lot in making financial decisions.',
  },
  {
    name: 'Muhd Taufiq',
    advisor: 'Yvonne & Dovanson',
    text: 'They’ve been very helpful in letting me further understand the policies that I’m signing up for and the coverages that I have with other FAs as well. They break down clearly for me and simplify terms that normies don’t usually use. Definitely would recommend Yvonne and Dovanson for anyone who’s on the fence about buying insurance and wanting to understand how to effectively stretch their dollar for insurance coverage and other things too.',
  },
  {
    name: 'Maggie Tan',
    advisor: 'Alicia & Chermayne',
    text: 'Enjoyed the very clear sharing by Alicia and Chermayne about maternity plan. 😍',
  },
  {
    name: 'Samuel Yap',
    text: 'Learnt a lot from the advisors, great session with a lot of education and they are open to questions too',
  },
  {
    name: 'Ryan Tan',
    advisor: 'Grace & Shearn',
    text: 'Took the first step in my wealth accumulation journey with Grace and Shearn. While overwhelmed at first, both advisors went to great lengths to help me understand how policies work and advised me on the optimal actions to take according to my particular situation. Both Grace and Shearn made commendable efforts to ensure that I could comfortably clarify whatever doubts I had. I am thankful for their service and would recommend it to anyone interested.',
  },
  {
    name: 'Trevar Toh',
    advisor: 'Chermayne',
    text: 'Before I met Chermayne, I was not very informed on matters regarding health plans. She has provided me with much assistance on this matter. I would definitely recommend her to anybody who requires such assistance.',
  },
  {
    name: 'Lee Yuan Zhang',
    advisor: 'Shearn & Grace',
    text: 'My advisors are Shearn & Grace, both of them made me realised the importance of investing and guided me along the way. Allowing me to understand about risk and returns. They are definitely knowledgeable and understand their client’s needs. 😊',
  },
  {
    name: 'Jia Jun Lim',
    advisor: 'Dovanson',
    text: 'My advisor Dovanson is knowledgeable and understanding of my requirements and needs. I would recommend him to people who have just started work and need reliable financial advice',
  },
  {
    name: 'Aaron Lim',
    advisor: 'Dovanson & Chermayne',
    text: 'I have been working with Dovanson and Chermayne for the past 10 years. They’ve always provided me with solid advise and great financial tips.',
  },
  {
    name: 'Edwin Tan',
    advisor: 'Glenn',
    text: 'I would recommend Glenn, as he is a approachable and consistent advisor. I would recommend him to anyone who have doubts in a insurance agent (due to the bad agent outside) as he is honest and will help to do Financial Planning to your needs.',
  },
  {
    name: 'Flandre Ting',
    advisor: 'Glenn',
    text: 'Glenn is a very friendly and knowledgeable advisor, who never fail to give options in my financial journey. Glenn work and builds lasting relationship with his clients. I strongly recommend him to anyone who start out his Financial Planning.',
  },
  {
    name: 'Kelvin Lai',
    advisor: 'Ivan Chua',
    text: 'Ivan Chua: A long time friend who has provided me with great insights and second opinion to my current financial planning. Someone who knows his stuff well, professional and not pushy. Definitely recommend!',
  },
  {
    name: 'Daniel Rajaiah',
    advisor: 'Baohui',
    text: 'Bao Hui: A knowledgable advisor, he presents the products in a clear manner. He is professional and is not pushy. I would definitely recommend him to young adults.',
  },
  {
    name: 'Muhd Akram',
    advisor: 'Alicia',
    text: 'Alicia: An advisor who makes things easy to understand, she explains every policies and terms very well. I would recommend her to uni students and young professionals.',
  },
  {
    name: 'Zhi Kai',
    advisor: 'Alicia',
    text: 'Alicia is a conscientious and detailed advisor who always puts the needs of her clients first. You can be assured that she has your interests at heart and she isn’t trying to persuade you to take up any random policies. She takes the initiative to arrange for reviews of existing policies and at the same time, gives good advice too. I would recommend her to young working adults and people who are starting their own families.',
  },
  {
    name: 'Leo Sin Chyuan',
    advisor: 'Alicia',
    text: 'Alicia is a friendly and helpful advisor who thinks of her clients. I would recommend her to people who are aged 25-35.',
  },
  {
    name: 'Joyce Tan',
    advisor: 'Baohui',
    text: 'Baohui is always responsive and he explains everything in detail. I didn’t really understand the benefits of insurance until he explained it clearly to me. I would recommend him to people who are graduating and have yet to be insured',
  },
  {
    name: 'Jeremy Tan',
    advisor: 'Baohui',
    text: 'Baohui: A detailed oriented advisor. He always comes from a place of concern, is not pushy and only proposes policies that I need. I was looking for more variety on my investment portfolio and Baohui provided that information. I would recommend him to people who just starting working. I believe he has the ability to understand them and their challenges.',
  },
  {
    name: 'Rickson Tong GL',
    advisor: 'Baohui',
    text: 'Baohui: A good and responsive advisor. he is not my first insurance agent and I am sure he is going to be my last. He is straightforward and never misrepresents any facts. Whatever he recommends to his clients, he already has and believes in product. I would recommend him to anyone.',
  },
  {
    name: 'Paladin Kelvin',
    advisor: 'Shearn',
    text: 'Shearn is an advisor who makes you feel more like a friend / bro. I would recommend him to budding graduates or fresh graduates who are interested to know more about how to be insured.',
  },
  {
    name: 'Lim Guo Wen Alvin',
    advisor: 'Shearn',
    text: 'Shearn: An approachable advisor who consider the needs of his clients. I was looking for someone to do a review on my portfolio when I met Shearn. He listened to me, understood my needs and recommended policies that I needed. He is not a pushy advisor who forces products on his clients. I would recommend him to young adults, people starting their families and fresh graduates looking to be insured.',
  },
  {
    name: 'Mervyn Lim',
    advisor: 'Shearn',
    text: 'Shearn: An honest and upfront advisor. He puts my interests and needs first and has never tried to sell me anything that I do not need. I would recommend him to working professionals who are about 25-35 years old.',
  },
  {
    name: 'Zhuang Shiwen Christine',
    advisor: 'Shearn',
    text: 'Shearn is an approachable advisor who always provides lots of information. He ensures that I have a better understanding of the policies I have and what is available in the market. Shearn went through my portfolio and gave me advice on what to keep and drop. I would recommend Shearn to young adults who just started working because he is informative and reliable.',
  },
  {
    name: 'Ann Gee',
    advisor: 'Shearn',
    text: 'Shearn is an advisor who is easy to talk to, he really cares about how protected his clients are and is helpful in answering all my questions. I would especially recommend Shearn to people in their 20s / 30s and people who are looking for a second opinion.',
  },
  {
    name: 'Leonard Chua',
    advisor: 'Shearn',
    text: 'Shearn: A detailed and helpful advisor who provides all the relevant and necessary information. I shared my plans with him and he provided good advice. I would recommend Shearn to anyone who is looking to be insured.',
  },
  {
    name: 'Patpat Kong',
    advisor: 'Shearn',
    text: 'Shearn: An advisor who connects with me. I would recommend him to anyone.',
  },
  {
    name: 'JB Law',
    advisor: 'Shearn',
    text: 'Shearn is a helpful advisor who is always there to help and support me. He responses very quickly whenever I have difficulties and gives good advice. I would recommend Shearn to friends who are looking to be insured.',
  },
  {
    name: 'Ryan Lai',
    advisor: 'Yvonne',
    text: 'Yvonne is a good advisor. She gives me all the information and will advise me according to my needs. I would recommend her to people who have just started working.',
  },
  {
    name: 'Tay Wei Ying',
    advisor: 'Yvonne',
    text: 'Yvonne is a considerate and cheerful advisor with a sense of humor. She reviewed my policies and cleared some gaps to make sure i was well-covered. I would recommend her to anyone.',
  },
  {
    name: 'Tan Haoping',
    advisor: 'Yvonne',
    text: 'Yvonne is a helpful advisor who is always giving me advice whenever I have any doubts and goes the extra mile to help me out even for issues that are not insurance related. I would recommend her to anyone.',
  },
  {
    name: 'Irene Lai',
    advisor: 'Yvonne',
    text: 'Yvonne is a good advisor. She knew my needs and recommended plans according to them. i would recommend her to people who haven’t been insured.',
  },
  {
    name: 'Ghui Meng Yang',
    advisor: 'Yvonne',
    text: 'Yvonne: A helpful and attentive advisor that I would recommend to anyone! She took the effort to consolidate and go through all my existing insurances and advised adequately!',
  },
  {
    name: 'Joey Poh',
    advisor: 'Yvonne',
    text: 'Yvonne is the best advisor anyone can ask for. I know I can trust her and she always answers all my questions. I would recommend her to anyone!',
  },
  {
    name: 'Sia Hou Ping',
    advisor: 'Yvonne',
    text: 'Yvonne: A helpful and responsive advisor. I would recommend her to anyone.',
  },
  {
    name: 'Danial Azman',
    advisor: 'Yvonne',
    text: 'Yvonne: An advisor who follows up with me frequently and responds to me when I need. She keeps me updated. I would recommend her to anyone!',
  },
  {
    name: 'Shawn Lim Lim',
    advisor: 'Chermayne',
    text: 'Chermayne: A knowledgeable and helpful advisor, she replied fast to any questions that I needed answers to. I would definitely recommend her to fresh graduates and couples starting a family.',
  },
  {
    name: 'Rachel Soo',
    advisor: 'Chermayne',
    text: 'Chermayne: A genuine and trust-worthy advisor, she was comfortable to talk to. I can always seek advisory from her without feeling pressured to purchase. Before I met Chermayne, I was afraid to ask from advisors as I was afraid to purchase from hard-selling. Now, I can trust that I purchase only when I’m capable and when I need to, with Chermayne giving attention to my concerns and being easily available to explain to me. I would definitely recommend her to working adults.',
  },
  {
    name: 'Steven Soo',
    advisor: 'Chermayne',
    text: 'Chermayne: A friendly advisor, she was sociable and breaks the ice quickly. She is easy to talk to and plan with. I would definitely recommend her to people who just started working.',
  },
  {
    name: 'Meini Wong',
    advisor: 'Chermayne',
    text: 'Chermayne is a very friendly and passionate advisor who puts great effort in her work and builds lasting relationship with her clients. She is also always ready to help me with my insurance related questions and claims. I would recommend her to fresh graduates and young adults because I believe she will be relatable people in that age group.',
  },
  {
    name: 'Xu Tianhan',
    advisor: 'Chermayne',
    text: 'Chermayne is honest and enthusiastic. She gets to know the situation to propose the right plan for me. I would recommend Chermayne to NSFs.',
  },
  {
    name: 'Hannah Ho',
    advisor: 'Chermayne',
    text: 'Chermayne is a genuine, knowledgable and trust-worthy advisor, she introduced me to policies I should start off with. I would definitely recommend her to all because she can converse well.',
  },
  {
    name: 'Gunawan Halim',
    advisor: 'Chermayne',
    text: 'Chermayne: A smart and helpful advisor, she answers my questions and helps me understand about insurance and investments. She also helps me plan my priorities on my financial goals. I would definitely recommend her to working adults.',
  },
  {
    name: 'Jesseca Goh',
    advisor: 'Chermayne',
    text: 'Chermayne is a very helpful, professional and efficient advisor. I would recommend her to working adults.',
  },
  {
    name: 'Faye Cleverest',
    advisor: 'Chermayne',
    text: 'I would like to recommend Chermayne, who’s my advisors. She is a sincere advisor, she has helped not just me, but my friends and neighbours as well. I believe she has made my life better by recommending the best policies suited for me. Chermayne is very easy to talk to and I would definitely recommend her to working adults.',
  },
  {
    name: 'Farah Akbar',
    advisor: 'Chermayne',
    text: 'I strongly recommend Chermayne an honest, hardworking and reliable advisor. Before I met Chermayne, I’ve experienced other advisors who do not follow-up. Chermayne messages and keeps in touch with me regularly. She also updates on policies. I believe Chermayne is suitable to be recommended to all age groups because she is calm and recommends the best plan for suited for your needs.',
  },
  {
    name: 'Kay Tej Pal',
    advisor: 'Dovanson',
    text: 'Dovanson: A committed advisor who replies promptly. Dovanson provides very sound advice and is always available to provide them, regardless of where I get my policies from. I feel assured because I know my financial security is his priority. I can safely say, I’ve never come across any insurance agent as committed as Dovanson! I would recommend him to anyone!',
  },
  {
    name: 'Fiona Lam',
    advisor: 'Dovanson',
    text: 'Dovanson: A responsive agent who is very knowledgeable about his products. I would recommend him to anyone who are not insured.',
  },
  {
    name: 'James Clydeton',
    advisor: 'Dovanson',
    text: 'Dovanson: a 10/10 advisor. My journey with him has been smooth sailing so far. I would recommend Dovanson to young families who are looking to be insured.',
  },
  {
    name: 'Hanz Lu',
    advisor: 'Dovanson',
    text: 'Dovanson: A responsible advisor who responds very quickly. I would recommend him to anyone who is looking to be insured.',
  },
  {
    name: 'Joseph Yeo',
    advisor: 'Dovanson',
    text: 'Dovanson is a proactive and approachable advisor who is very knowledgeable. He presents information very clearly and is great at following up and giving me new updates. I would recommend him to anyone seeking financial advice especially younger people because it is easy to relate to him.',
  },
  {
    name: 'Jennifer Ng',
    advisor: 'Dovanson',
    text: 'Dovanson: A good and patient advisor. He responds very quickly and gets things done. I would recommend him to anyone who is looking to be insured.',
  },
  {
    name: 'Panya Tern',
    advisor: 'Dovanson',
    text: 'Dovanson is an advisor who is hands-on and present. He makes time to touch base with his clients and sends little gifts. I would recommend Dovanson to anyone who are setting up their families.',
  },
]

/**
 * Recommendations from former advisors and ADAPT trainees rather than clients.
 * Kept out of `testimonials` so the homepage "Client Success" wall stays client
 * voices only — these belong with recruitment/careers content.
 */
export const careerTestimonials: Testimonial[] = [
  {
    name: 'Daniel Toong',
    advisor: 'Dovanson',
    text: 'Was previously an advisor with Spartans. This experience was absolutely heart warming. Everyone was very welcoming and it felt like home. Dovanson has built an environment for us to grow into a better version of yourself. He is a leader who is truly one in a billion as he depicted the qualities. Firstly, he place others ahead of himself and I can truly vouch for that. Secondly, the responsibility he has is really exemplary, he would take charge of team and spur everyone. Lastly, his genuinity is evident in every situation encountered, and I have zero doubts about that. I would love to recommend anyone who wants to build a career in this space, with him.',
  },
  {
    name: 'YewSheng Fong',
    advisor: 'Dovanson',
    text: 'I was an advisor with Spartans for 2 years and I had no regrets joining. Dovanson is a very nurturing and caring boss while the rest of the team are extremely fun people! The team is extremely supportive of each other and it has helped me to grow as a person. The structure developed by Dovanson helps every advisor succeed using their own methods. Even when I felt lost, the team will always be there to help me. I always felt confident that I could contact anyone in my team at anytime if I ran into any issues. Due to the team support, it helped me service my clients as well! Aside from work, we hang with each other quite often and every session is always fun, with games and activities always planned! Although I left due to other opportunities, I would definitely recommend Spartans to anyone considering this business!!',
  },
  {
    name: 'Luo Tian You',
    text: 'Before I attended the ADAPT Programme, I was curious to learn more about the Financial Advisory industry, but at the same time hesitant to whether I was actually suitable for the role as a financial advisor. But during the course of the training, I encountered many friendly and knowledgeable mentors who patiently guided us trainees along the way and many fellow trainees who shared an interest in this field. Through this programme, I began to appreciate the importance of sound financial planning and would be more inclined to discuss it with my relatives and friends on insurance and wealth management. The information imparted during training also gave me a better grasp of the different techniques in sales and negotiation, which can be universally applied across multiple sectors in future. Thank you SPARTANS Advisors!',
  },
]
