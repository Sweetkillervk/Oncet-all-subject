// Quiz data with more questions and categories
const quizData = {
  general: [
    
  {
    "question": "Which statement is correct?",
    "options": ["If only I have studied well, I would have passed the test.", "If only I had studies well, would have passed the test.", "If only I had studied well, I would have passed the test.", "If only I having studied well, would have passed the test."],
    "correct": 2,
    "explanation": "Past unreal situations में 'If only I had studied well' सही है। Past perfect tense का इस्तेमाल होता है।"
  },
  {
    "question": "We………………. be careful or we will lose the match.",
    "options": ["Have to", "Must are", "Going", "Has to"],
    "correct": 0,
    "explanation": "'Have to' अनिवार्यता दिखाता है, इसलिए यह सही विकल्प है।"
  },
  {
    "question": "Prof.Joshi ……………. at the university for more than a year he left for USA.",
    "options": ["Had been teaching", "Has been teaching", "Been teaching", "Being teaching"],
    "correct": 0,
    "explanation": "'Had been teaching' past perfect continuous tense है, जो एक लम्बी क्रिया को दर्शाता है।"
  },
  {
    "question": "I hope you eaten…………….. because you are travelling and may not for lunch.",
    "options": ["So", "Enough", "Too", "Such"],
    "correct": 1,
    "explanation": "'Enough' उपयुक्त है क्योंकि यह मात्रा को दर्शाता है।"
  },
  {
    "question": "That’s the man…………………. face was in that advertisement, Remember?",
    "options": ["Whose", "Who", "Which", "When"],
    "correct": 0,
    "explanation": "'Whose' possessive pronoun है जो 'face' के लिए सही है।"
  },
  {
    "question": "Which sentence is correctly speaking of events that have happened before another event in the past?",
    "options": ["We had established our business well bofore we opened more stores.", "We had established our business well bofore we open more stores.", "We have established our business well before we opening more stores.", "We had establishing our business well before we open more stores."],
    "correct": 0,
    "explanation": "Past perfect 'had established' और past simple 'opened' का सही उपयोग किया गया है।"
  },
  {
    "question": "Which sentence has the phrasal verb used correctly?",
    "options": ["I’ve to up decided take running.", "I’ve up running to decided take.", "I’ve decided to take up running.", "I’ve take decided to up running."],
    "correct": 2,
    "explanation": "'Take up' एक सही phrasal verb है जिसका अर्थ है नई आदत या गतिविधि शुरू करना।"
  },
  {
    "question": "Which sentence talks correctly about something that didn’t happen and its imaginary results?",
    "options": ["If you had worked harder, you wouldn’t have failed the test.", "If you worked harder, you wouldn’t failed the test.", "If you had work harder, you wouldn’t has failed the test.", "If you have worked harder, you wouldn’t had failed the test."],
    "correct": 0,
    "explanation": "'If you had worked harder' past perfect और 'wouldn't have failed' का सही प्रयोग है।"
  },
  {
    "question": "Don’t call on your father’s cell now. He …………… busy working.",
    "options": ["Will", "Will be", "Will have", "Will be having"],
    "correct": 1,
    "explanation": "'Will be' भविष्य में किसी समय पर ongoing action को दर्शाता है।"
  },
  {
    "question": "I will have climbed that peak by………… noon.",
    "options": ["Yesterday", "Tomorrow", "Last year", "Later"],
    "correct": 1,
    "explanation": "'Tomorrow noon' भविष्य में एक निश्चित समय को दर्शाता है।"
  },
  {
    "question": "Select the correct question tag for the sentence. She will pass the exam with flying colours……..?",
    "options": ["Won’t she?", "Will she?", "Can she?", "Can’t she?"],
    "correct": 0,
    "explanation": "'Will' auxiliary का negative 'Won’t' सही tag है।"
  },
  {
    "question": "Which sentence is correct?",
    "options": ["He should have try harder.", "He should have to try harder.", "He should have trying harder.", "He should have tried harder."],
    "correct": 3,
    "explanation": "'Should have' के बाद verb का third form आता है, इसलिए 'tried' सही है।"
  },
  {
    "question": "This time next week we……………… over the Pacific ocean.",
    "options": ["Will flying", "Will flying", "Be flying", "Will be flying"],
    "correct": 3,
    "explanation": "'Will be flying' future continuous tense का सही प्रयोग है।"
  },
  {
    "question": "Which sentence is correct?",
    "options": ["Please type fastly because I can not wait more.", "He listened carefully to their instructions.", "We started so lately that when we reached the wedding was over.", "They acted very godly and helped many poor person."],
    "correct": 1,
    "explanation": "'Carefully' सही adverb है और sentence शुद्ध है।"
  },
  {
    "question": "They………… me something useful for my birthday.",
    "options": ["Could have gives", "Could have given", "Could had given", "Could had giving"],
    "correct": 1,
    "explanation": "'Could have given' सही structure है।"
  },
  {
    "question": "Our…………………… us to summer camps when we were in high school.",
    "options": ["Used sent", "Had sent", "Would send", "Would sending"],
    "correct": 2,
    "explanation": "'Would send' past habits को दर्शाता है।"
  },
  {
    "question": "Which spoken sentence is correctly matching the reported sentence: they all shouted happily, saying that it was awesome.",
    "options": ["They all shout and happy, 'that it is awesome'", "They all shouted, 'saying happy it was awesome'", "They all shouted happily, 'this is awesome!'", "They all shout happily to say, 'it is awesome'"],
    "correct": 2,
    "explanation": "'They all shouted happily, 'this is awesome!'' सही रूप है।"
  },
  {
    "question": "If we give so much freedom to our children they are……….. be spoiled.",
    "options": ["Going to", "Gone to", "Will", "Goes to"],
    "correct": 0,
    "explanation": "'Are going to' भविष्य की strong संभावना को दिखाता है।"
  },
  {
    "question": "Which sentence is correct?",
    "options": ["I wish she wasn’t so bossy.", "I wish she weren’t so bossy.", "I wish she isn’t being so bossy.", "I wish she can’t be so bossy."],
    "correct": 1,
    "explanation": "'I wish she weren't so bossy' hypothetical situation में 'weren't' का उपयोग होता है।"
  },
  {
    "question": "Manish was sleepy as he ……………….. well the night before.",
    "options": ["Had not slept", "Has not sleep", "Has not slept", "Had not sleeping"],
    "correct": 0,
    "explanation": "Past perfect 'Had not slept' सही है।"
  },
  {
    "question": "Which two sentence are correct?",
    "options": ["She is always playing video games, but now she wants to give up.", "She is always playing video games, but now she wants to give video up.", "She is always playing video games, but now she wants to give it up.", "She is always video games, but now she wants to give playing up."],
    "correct": 0,
    "explanation": "Sentence 1 और 3 दोनों सही हैं।"
  },
  {
    "question": "Choose the appropriate option to complete the question: ……………………… was that house painted?",
    "options": ["When", "What", "Whose", "How"],
    "correct": 0,
    "explanation": "'When' समय पूछने के लिए सही है।"
  },
  {
    "question": "Which is the correct reported speech of the sentence: she said, 'I have been looking for them for the last hour.'",
    "options": ["She say that she have been looking for them for the past one hour.", "She said she had been looking for them for the past one hour.", "She said that she has been looking for the past one hour.", "She said that she had been looking for them for the past one hour."],
    "correct": 3,
    "explanation": "Correct reported speech में 'had been looking' होगा।"
  },
  {
    "question": "I have been busy…………… ten O’clock and now I am resting.",
    "options": ["For", "To", "Till", "Since"],
    "correct": 3,
    "explanation": "'Since' एक fixed point of time को दर्शाता है।"
  },
  {
    "question": "Select the correct question tag for the sentence. We can’t buy everything in the shop……………………?",
    "options": ["Can’t we?", "Have we?", "Will we?", "Can we?"],
    "correct": 3,
    "explanation": "'Can we?' negative sentence के लिए सही question tag है।"
  },
  {
    "question": "……………………. shortage of fuel we were lucky to be able to reach our destination.",
    "options": ["But", "Although", "However", "Despite the"],
    "correct": 3,
    "explanation": "'Despite the' का प्रयोग बाधा के बावजूद दर्शाता है।"
  },
  {
    "question": "Which sentence is correctly speaking of events that have happened before another event in the past?",
    "options": ["Kavita had wanting to go to the party but her parents didn’t allowed her.", "Kavita had wanted to go to the party but her parents didn’t allowed her.", "Kavita had wanting to go to the party but her parents didn’t allowing her.", "Kavita had wanted to go to the party but her parents didn’t allow her."],
    "correct": 3,
    "explanation": "'Had wanted' और 'didn’t allow' का सही उपयोग है।"
  },
  {
    "question": "Sanjay called to say that he……………… attending the function.",
    "options": ["Will not", "Will not being", "Will not be", "Will beig"],
    "correct": 2,
    "explanation": "'Will not be attending' सही future continuous है।"
  },
  {
    "question": "Which TWO sentences are correct?",
    "options": ["Now you pick them up for their home and take them to the bus stand.", "Now pick them up for their home and take you them to the bus stand.", "Now pick them up for their home and take them you to the bus stand.", "Now from their home you pick them up and take them to the bus stand."],
    "correct": 0,
    "explanation": "Sentence 1 और 4 सही हैं।"
  },
  {
    "question": "Use the correct form of ‘leave’ they ………………… the railway station when they saw their daughter.",
    "options": ["Leaves", "Was leaving", "Will be leaving", "Were leaving"],
    "correct": 3,
    "explanation": "'Were leaving' past continuous tense का सही उपयोग है।"
  },
  {
    "question": "Which is the adverb in the sentence: the leaves of that tree were falling rapidly and soon it looked quite bare.",
    "options": ["Bare", "Tree", "Leaves", "Rapidly"],
    "correct": 3,
    "explanation": "'Rapidly' क्रिया 'were falling' को describe करता है, इसलिए adverb है।"
  },
  {
    "question": "She…………………… studied harder to get higher score.",
    "options": ["Shall have", "Should have", "Shall", "Should be"],
    "correct": 1,
    "explanation": "'Should have' past के लिए सलाह देने के लिए सही है।"
  },
  {
    "question": "Which of these sentence is showing that some action is being done to something and it is done by something or someone?",
    "options": [
      "They chips were emptied into the large bowl.",
      "The large chips emptied them into the bowl.",
      "The large bowl emptied the chips.",
      "The bowl emptied the large chips into it."
    ],
    "correct": 0,
    "explanation": "Passive voice में action किसी पर किया जाता है, और 'They chips were emptied into the large bowl.' passive sentence है।"
  },
  {
    "question": "Which sentence has the phrasal verb used correctly?",
    "options": [
      "I’m going to take back it to the shop.",
      "I’m going to take it back to she shop.",
      "I’m going to back take it to the shop.",
      "I’m going to take It to back the shop."
    ],
    "correct": 1,
    "explanation": "'Take it back' phrasal verb सही रूप है जिसका मतलब चीज़ वापस लेना है।"
  },
  {
    "question": "They don’t think he…………………. Like sweets.",
    "options": ["Is not going to", "Will", "Won’t", "Is going"],
    "correct": 1,
    "explanation": "'Will' भविष्य के बारे में कहने के लिए सही है।"
  },
  {
    "question": "Next year we will be……………………… for a bigger company I think.",
    "options": ["Working", "Work", "Worked", "Works"],
    "correct": 0,
    "explanation": "'Will be working' future continuous tense है।"
  },
  {
    "question": "Choose the appropriate option to make the sentence positive to negative they paid the rent yesterday. They didn’t ………………. The rent yesterday",
    "options": ["Pay", "Paid", "Pays", "Paying"],
    "correct": 0,
    "explanation": "Negative sentence में 'didn't' के बाद verb का base form आता है।"
  },
  {
    "question": "Which is the adverb in the sentence: he walked into the house quickly.",
    "options": ["He", "Quickly", "Into", "House"],
    "correct": 1,
    "explanation": "'Quickly' verb 'walked' को describe करता है, इसलिए adverb है।"
  },
  {
    "question": "Next year he……………… a degree programme.",
    "options": ["Will entering", "Will have entered", "Will had entry", "Will had entered"],
    "correct": 1,
    "explanation": "'Will have entered' future perfect tense का सही रूप है।"
  },
  {
    "question": "Which of tense sentence is showing that some action is being done to something and it is done by something or someone?",
    "options": [
      "This tribal basket weaves the women form these hills.",
      "This basket was by the tribal women from these hills.",
      "This tribal women make the woven basket from these hills.",
      "These baskets of this hill are from the tribal women."
    ],
    "correct": 1,
    "explanation": "Passive voice में क्रिया किसी पर की जाती है, 'This basket was by the tribal women' passive है।"
  },
  {
    "question": "Which sentence is correct?",
    "options": [
      "If he’d not lost his passport, he would be not flying back home today.",
      "If he’d not lost his passport, he would be flying back home today.",
      "If he had lost his passport back, he would be flying home today.",
      "If he has not lost his passport, he would be flying back home today."
    ],
    "correct": 1,
    "explanation": "Second conditional में 'If he’d not lost' + 'would be flying' सही है।"
  },
  {
    "question": "Which spoken sentence is correctly matching the reported sentence: she screamed saying she needed help as there was a snake under her bed.",
    "options": [
      "She screamed, “help! There is a snake under my bed”",
      "She is screaming, “help! There is a snake under mu bed”",
      "She screams, “help! There was a snake under her bed”",
      "Her scream, “help! There is a snake under a bed”"
    ],
    "correct": 0,
    "explanation": "Reported speech में direct speech के रूप में 'She screamed, “help! There is a snake under my bed”' सही है।"
  },
  {
    "question": "Don’t pull………………………….. hard or you will break the thread.",
    "options": ["Such", "So", "Too", "Enough"],
    "correct": 2,
    "explanation": "'Too hard' मतलब बहुत ज़्यादा जोर से, सही है।"
  },
  {
    "question": "My friends and I ……………….. trekking once when I was in college but I have never trekked after that.",
    "options": ["Will go", "Had gone", "Goes", "Going"],
    "correct": 1,
    "explanation": "'Had gone' past perfect tense में एक finished action दिखाता है।"
  },
  {
    "question": "Which sentence is correctly speaking of event that happened before another event in the past?",
    "options": [
      "The lady who is our neighbors asking me if I have seen her son.",
      "The lady who is our neighbour asks me if I had seeing her son.",
      "The lady who is our neighbour asked me if I had seen her son.",
      "The lady who is our neighbour ask me if had seen her son."
    ],
    "correct": 2,
    "explanation": "'Asked' और 'had seen' दोनों past tense हैं।"
  },
  {
    "question": "………………. Christmas, the weather has been quite good.",
    "options": ["Since", "How long", "When", "For"],
    "correct": 0,
    "explanation": "'Since' एक fixed time point से duration बताता है।"
  },
  {
    "question": "A lion was once…………….. in a cage and so it kept roaring loadly.",
    "options": ["Trapping", "Traps", "Trapped", "Trap"],
    "correct": 2,
    "explanation": "'Trapped' past participle passive voice में सही है।"
  },
  {
    "question": "I …………………. Make paste for the party tomorrow.",
    "options": ["Will", "Going to", "Gone to", "Willing"],
    "correct": 0,
    "explanation": "'Will make' भविष्य के लिए सही होगा।"
  },
  {
    "question": "The children love playing together on the beach.",
    "options": ["With", "All", "Together", "Send"],
    "correct": 2,
    "explanation": "'Together' मिलकर खेलने का अर्थ बताता है।"
  },
  {
    "question": "I think the bags……………………….. sold out by the time we go.",
    "options": ["Will have", "Would", "Will having", "Will having to"],
    "correct": 0,
    "explanation": "'Will have sold out' future perfect tense है।"
  },
  {
    "question": "Use the correct form of “study”: she ………………….. for her masters in pune university when she met my brothers.",
    "options": ["Isn’t studying", "Will study", "Was studying", "Were studying"],
    "correct": 2,
    "explanation": "Past continuous 'Was studying' सही है।"
  },
  {
    "question": "Choose the correct option to show condition “very Likely”: they ……………….. be coming in late they said.",
    "options": ["Will", "May", "Might", "Do"],
    "correct": 0,
    "explanation": "'Will' strong possibility के लिए सही है।"
  },
  {
    "question": "Choose the appropriate option to complete the answer. Q. where did you go yesterday? Ans: I ………………… to the city yesterday",
    "options": ["Went", "Have gone", "Will go", "Am going"],
    "correct": 0,
    "explanation": "Past simple 'Went' सही है।"
  },
  {
    "question": "No, I haven’t had a holiday………………….. five years.",
    "options": ["How long", "When", "Since", "For"],
    "correct": 3,
    "explanation": "'For' समय अवधि के लिए इस्तेमाल होता है।"
  },
  {
    "question": "Which spoken sentence is correctly matching the reported sentence: she asked him angrily where he was going at that hour.",
    "options": [
      "“where was he going at this hour?” she asked angrily.",
      "“where are you going at this hour?” she asked angrily.",
      "“where are you angrily going at this hour?” she asks.",
      "“where are you at this hour?” she asked going angrily."
    ],
    "correct": 0,
    "explanation": "Reported speech में past tense 'was going' सही है।"
  },
  {
    "question": "……………………..father come home, we will be asleep",
    "options": ["In time", "By the time", "By", "In timing"],
    "correct": 1,
    "explanation": "'By the time' समय के सापेक्ष सही phrase है।"
  },
  {
    "question": "Reported speech: the audience shouted asking repeatedly for a ‘once more’. Direct speech: The………….. “once more, once more”.",
    "options": [
      "Audience had shouted",
      "Audience shouts",
      "Audience shouted",
      "Audience is shouting"
    ],
    "correct": 2,
    "explanation": "Simple past 'Audience shouted' सही है।"
  },
  {
    "question": "The cake didn’t rise well because I …………………… too much butter in the batter.",
    "options": ["Have put", "Have putting", "Puts", "Had put"],
    "correct": 3,
    "explanation": "Past perfect 'Had put' सही है।"
  },
  {
    "question": "Which option is suitable for the sentence: The sky is heavy with dark clouds so it might rain soon.",
    "options": [
      "Believe it is not true or happening",
      "None",
      "Sure about it",
      "Not sure but possible"
    ],
    "correct": 3,
    "explanation": "'Might rain' अनिश्चितता को दर्शाता है।"
  },
  {
    "question": "Will she have…………….. her journey by now?",
    "options": ["Starts", "Starting", "Started", "Starts"],
    "correct": 2,
    "explanation": "'Will have started' future perfect tense के लिए सही है।"
  },
  {
    "question": "Your parents also have been………………… for the wedding.",
    "options": ["Invite", "Invitation", "Invites", "Invited"],
    "correct": 3,
    "explanation": "'have been invited' passive voice में सही है।"
  },
  {
    "question": "Choose the appropriate option to make the positive sentence to negative: The teacher said that he was a good boy. The teacher didn’t………………… that he was good boy.",
    "options": ["Say", "Says", "Saying", "Said"],
    "correct": 0,
    "explanation": "negative sentence में 'didn’t say' सही होता है क्योंकि past simple में auxiliary 'did' use होता है।"
  },
  {
    "question": "Has she …………….. practicing guitar on Monday too?",
    "options": ["Being", "Been", "Have", "Had"],
    "correct": 1,
    "explanation": "'Has she been' present perfect continuous के लिए सही है।"
  },
  {
    "question": "We missed our flights……………………… the heavy traffic on the highway",
    "options": ["However", "Due to", "So", "However"],
    "correct": 1,
    "explanation": "'Due to' का मतलब कारण होता है, इसलिए यह सही विकल्प है।"
  },
  {
    "question": "You ……………….. Not eat such fatly when you are already overweight.",
    "options": ["Have", "Must", "Don’t", "Does"],
    "correct": 1,
    "explanation": "'Must not' का मतलब है 'नहीं करना चाहिए', इसलिए यह सही है।"
  },
  {
    "question": "Reported speech: you said that you were no feeling well. Direct speech: you said, “I …………………. Feeling well.",
    "options": ["Had not", "Have not", "Are not", "Am not"],
    "correct": 0,
    "explanation": "Reported speech में past perfect 'had not' का इस्तेमाल होता है।"
  },
  {
    "question": "When I was a student I ………….. my mornings doing yoga daily.",
    "options": ["Used to spend", "Would spend", "Is spending", "Will jogging"],
    "correct": 0,
    "explanation": "'Used to spend' habitual past action के लिए सही है।"
  },
  {
    "question": "Suneel was very tired because he………………",
    "options": ["Had jogging", "Had been jogging", "Have jogging", "Has jogging"],
    "correct": 1,
    "explanation": "'Had been jogging' past perfect continuous tense के लिए सही है।"
  },
  {
    "question": "Which phrasal verb is used in the sentence: you’ll put a coat on.",
    "options": ["You’ll need", "Need to", "A coat", "Put on"],
    "correct": 3,
    "explanation": "'Put on' एक phrasal verb है जो पहनने के लिए इस्तेमाल होता है।"
  },
  {
    "question": "I could ……………….. something for you if I knew were coming",
    "options": ["Had cooks", "Have cooking", "Have cooked", "Having cooked"],
    "correct": 2,
    "explanation": "'I could have cooked' hypothetical past action के लिए सही है।"
  },
  {
    "question": "I ……………… handle my sales cells better with this list of clients.",
    "options": ["Will going to", "Am going to", "Have going to", "Has going to"],
    "correct": 1,
    "explanation": "'Am going to' future intention दिखाने के लिए सही है।"
  },
  {
    "question": "Call them to inform the team that we…………………. Reaching late so keep everything ready.",
    "options": ["Will have", "Will", "Will being", "Will be"],
    "correct": 3,
    "explanation": "'Will be reaching' future continuous tense के लिए सही है।"
  },
  {
    "question": "Which sentence is correctly speaking of event/events that have happened before another event in the past?",
    "options": [
      "They lost the basketball match so they all go home.",
      "They lost the basketball match so they all went home.",
      "They losing the basketball match so they going home.",
      "They loses the basketball match so they all goes home."
    ],
    "correct": 1,
    "explanation": "Past tense में sequence बताने के लिए 'lost' और 'went' सही हैं।"
  },
  {
    "question": "Sandeep has been …………………….. in the river and playing with thes.",
    "options": ["Swimming", "Swam", "Will swim", "Being swimming"],
    "correct": 0,
    "explanation": "'Has been swimming' present perfect continuous tense में सही है।"
  },
  {
    "question": "Deepak used to live in Nagpur, India……………………. To London.",
    "options": ["Before he would go", "Before he left", "Before he went", "Before he is gone"],
    "correct": 2,
    "explanation": "'Before he went' past tense sequence दिखाने के लिए सही है।"
  },
  {
    "question": "I haven’t had a good meal…………… last Tuesday.",
    "options": ["How long", "When", "Since", "For"],
    "correct": 2,
    "explanation": "'Since' किसी शुरू हुए समय से अब तक के लिए सही है।"
  },
  {
    "question": "The baby………………. Stopped crying so now you can sleep.",
    "options": ["Has", "Had", "Will", "Have"],
    "correct": 0,
    "explanation": "'Has stopped' present perfect tense के लिए सही है।"
  },
  {
    "question": "We……………… be careful or we will lose the match.",
    "options": ["Have to", "Must are", "Going", "Has to"],
    "correct": 0,
    "explanation": "'Have to' obligation दिखाने के लिए सही है।"
  },
  {
    "question": "Which sentence is correct?",
    "options": [
      "We wouldn’t be lost if we had a map.",
      "We wouldn’t be lost if we had use a map.",
      "We wouldn’t be lost if we had used a map.",
      "We would be lost if we haven’t map."
    ],
    "correct": 2,
    "explanation": "Conditional sentence type 2 में 'had used' past perfect form सही है।"
  },
  {
    "question": "You should have……………………….. me earlier about this emergency.",
    "options": ["Phoning", "Phones", "Phoned", "To phone"],
    "correct": 2,
    "explanation": "'Should have phoned' past advice के लिए सही है।"
  },
  {
    "question": "Select the correct answer for the question: did they tell you how to reach their office?",
    "options": ["They didn’t", "They were", "They are", "They was"],
    "correct": 0,
    "explanation": "'Did they tell' के सवाल में जवाब में 'They didn’t' सही है।"
  },
  {
    "question": "What time ………………… for the interview?",
    "options": ["You going", "Will you be leaving", "Will you going", "You will leaving"],
    "correct": 1,
    "explanation": "'Will you be leaving' future continuous tense के लिए सही है।"
  },
  {
    "question": "Passing the test is ………………………. Be a problem if you don’t study.",
    "options": ["Going to", "Gone to", "Will", "Goes to"],
    "correct": 0,
    "explanation": "'Going to be' future intention दिखाने के लिए सही है।"
  },
  {
    "question": "My son ……………………………….. this scene to win best artist competition",
    "options": ["Draw", "Draws", "Drew", "Drawing"],
    "correct": 2,
    "explanation": "'Drew' past tense है, जो घटना के लिए सही है।"
  },
  {
    "question": "Select the correct question tag for the sentence: it worked smoothly at the ceremony………………….?",
    "options": ["Doesn’t it?", "Didn’it?", "Does it?", "Did it?"],
    "correct": 0,
    "explanation": "Positive sentence के लिए negative question tag 'Doesn’t it?' सही है।"
  },
  {
    "question": "The guards……………………. Close the office at nine at night on weekends",
    "options": ["Has to", "Have", "Does to", "Must"],
    "correct": 3,
    "explanation": "'Must' obligation दिखाने के लिए सही है।"
  },
  {
    "question": "Select the correct answer for the question: would you teach our children how to speak English?",
    "options": ["Yes, I was", "No, I aren’t", "Yes, I would", "No, I weren’t"],
    "correct": 2,
    "explanation": "शर्त के सवाल का सकारात्मक जवाब 'Yes, I would' सही है।"
  },
  {
    "question": "This is the place …………………….. we got our shopping done.",
    "options": ["Who", "Whose", "How", "Where"],
    "correct": 3,
    "explanation": "स्थान बताने के लिए 'where' सही विकल्प है।"
  },
  {
    "question": "They don’t think he…………………. Like sweets.",
    "options": ["Is not going to", "Will", "Won’t", "Is going"],
    "correct": 1,
    "explanation": "'Will' भविष्य में होने वाली क्रिया के लिए सही है।"
  },
  {
    "question": "Nilesh failed the German test, he……………. Studied much.",
    "options": ["Can’t have", "Must have", "Hasn’t", "Needn’t have"],
    "correct": 0,
    "explanation": "'Can’t have' यहाँ संभावना न होने के लिए सही है।"
  },
  {
    "question": "Don’t worry, I ………………. With my friend’s family they are good people.",
    "options": ["Will staying", "Staying", "Will having stay", "Will be staying"],
    "correct": 3,
    "explanation": "'Will be staying' भविष्य की योजना दिखाने के लिए सही है।"
  },
  {
    "question": "In 2012 Sangita………….. to USA to study medicine.",
    "options": ["Had gone", "Has gone", "Went", "Has been"],
    "correct": 2,
    "explanation": "'Went' past tense है, जो 2012 के लिए सही है।"
  },
  {
    "question": "Sanjay called to say that he ……………………….. attending the function.",
    "options": ["Will not", "Will not being", "Will not be", "Will being"],
    "correct": 2,
    "explanation": "'Will not be attending' future negative continuous tense है।"
  },
  {
    "question": "Which of these sentences is showing that some action is being done to something and it is done by someone?",
    "options": [
      "The love statue created deep with the artist.",
      "The statue created love with the deep artist.",
      "The statue was created with deep love by the artist",
      "The artist created the statue with deep love."
    ],
    "correct": 2,
    "explanation": "Passive voice में 'was created...by the artist' सही है।"
  },
  {
    "question": "Which sentence talks correctly about something that didn’t happen and its imaginary results?",
    "options": [
      "If we had come early, we would have the movie star.",
      "If we had come earlier, we would have seen the movie star.",
      "If we had come early, we would have the movie star",
      "If we had earlier, we would seen the movie star.",
      "If we had come earlier, we would have saw the movie star."
    ],
    "correct": 1,
    "explanation": "Third conditional में 'would have seen' सही है।"
  },
  {
    "question": "Choose the appropriate option to complete the sentence. Q. what did you do at her house? Ans: we …………………… cricket and ate ice cream.",
    "options": ["Playing", "Have played", "Played", "Had play"],
    "correct": 2,
    "explanation": "Past simple tense में 'played' सही है।"
  },
  {
    "question": "We …………………….. added right amount of salt. This curry is too salty",
    "options": ["Must have", "Can’t have", "Hasn’t", "Needn’t have"],
    "correct": 1,
    "explanation": "'Can’t have added' सही है क्योंकि करी ज्यादा नमकीन है।"
  },
  {
    "question": "Sheetal was ……………… very well by her brother so she scored well in her board exams.",
    "options": ["Tutor", "Tutored", "Tuition", "Tutoring"],
    "correct": 1,
    "explanation": "'Was tutored' passive voice में सही है।"
  },
  {
    "question": "Which sentence is correct?",
    "options": [
      "If we didn’t trust him we would have fired him after that incident.",
      "If we did trust him we would have fired him after that incident.",
      "If we didn’t trust him we wouldn’t have fired him after that incident.",
      "If we didn’t trust him we would had fire him after that incident."
    ],
    "correct": 2,
    "explanation": "Third conditional में 'wouldn’t have fired' सही है।"
  },
  {
    "question": "Which sentence is correct?",
    "options": [
      "If he was my brother I would tell him the truth.",
      "If he mere my brother I will tell him the truth.",
      "If he were him I tell my brother the truth.",
      "If he were my brother I would tell him the truth."
    ],
    "correct": 3,
    "explanation": "Second conditional में 'If he were' और 'I would tell' सही है।"
  },
  {
    "question": "Which sentence is NOT correct?",
    "options": [
      "She worked well",
      "She worked very well",
      "She worked quite well",
      "She worked very goodly."
    ],
    "correct": 3,
    "explanation": "'She worked very goodly.' गलत है क्योंकि 'goodly' सामान्य रूप से काम में नहीं आता, 'well' का प्रयोग सही है।"
  },
  {
    "question": "Are these………………………. Or do you want some more examples?",
    "options": ["Too", "So", "Enough", "Such"],
    "correct": 2,
    "explanation": "'Enough' सही है क्योंकि यहाँ मात्रा के लिए पूछा गया है।"
  },
  {
    "question": "Reported speech: Akbar said to Birbal that he wanted Birbal to give him the answer right then. Direct speech: Akbar said to Birbal, “I want you……….. the answer right now.”",
    "options": ["To give me", "Give to me", "Given to me", "Gives me to"],
    "correct": 0,
    "explanation": "'To give me' सही है क्योंकि यह इन्फिनिटिव फॉर्म है जो अनुरोध दर्शाता है।"
  },
  {
    "question": "I will have climbed that peak by ……………………….. noon.",
    "options": ["Yesterday", "Tomorrow", "Last year", "Later"],
    "correct": 3,
    "explanation": "'Later' सही विकल्प है क्योंकि भविष्य के संदर्भ में है।"
  },
  {
    "question": "I hope you have eaten …………………… because you are travelling and may not stop for lunch.",
    "options": ["So", "Enough", "Too", "Such"],
    "correct": 1,
    "explanation": "'Enough' सही है क्योंकि यह पर्याप्त भोजन के लिए उपयुक्त है।"
  },
  {
    "question": "We………………… be careful or we will lose the match.",
    "options": ["Have to", "Must are", "Going", "Has to"],
    "correct": 0,
    "explanation": "'Have to' सही है क्योंकि यह जरूरी कार्रवाई दर्शाता है।"
  },
  {
    "question": "Select the correct question tag for the sentence: we can’t buy everything in the shop………………?",
    "options": ["Can’t we?", "Have we?", "Will we?", "Can we?"],
    "correct": 3,
    "explanation": "Negative sentence के बाद positive question tag 'Can we?' सही है।"
  },
  {
    "question": "Your message was sent to the people that you…………….. in that list.",
    "options": ["Have marked", "Has marked", "Had marked", "Has markes"],
    "correct": 0,
    "explanation": "'Have marked' present perfect tense में सही है।"
  },
  {
    "question": "Reported speech: She called out to her son asking him to throw down the keys to her. Direct speech: she called out to her son, “………………………… the keys to me”",
    "options": ["Threw down", "Throw down", "Throws down", "Thrown down"],
    "correct": 1,
    "explanation": "Direct command के लिए 'Throw down' सही है।"
  },
  {
    "question": "They didn’t ask for any proof. I …………………… carried so many documents.",
    "options": ["Can’t have", "Must have", "Needn’t have", "Haven’t"],
    "correct": 2,
    "explanation": "'Needn’t have' सही है क्योंकि जरूरी नहीं था पर किया गया।"
  },
  {
    "question": "Many little birds ……………………… the garden and sing all day.",
    "options": ["Would come to", "Would coming", "Use to come to", "Use come to"],
    "correct": 0,
    "explanation": "'Would come to' habitual action दर्शाने के लिए सही है।"
  },
  {
    "question": "…………… did I do in the race? Ans: you did well but you can do better.",
    "options": ["Why", "When", "Now", "What"],
    "correct": 3,
    "explanation": "'What' सही सवाल है जो प्रदर्शन के बारे में पूछता है।"
  },
  {
    "question": "Which TWO sentences are correct?",
    "options": [
      "I dropped off at the station my mother as she is going to our native place for Diwali",
      "I dropped my mother off as at the station she is going to our native place for Diwali",
      "I dropped my mother off at the station as she is going to our native place for Diwali",
      "I dropped off my mother at the station as she is going to our native place for Diwali"
    ],
    "correct": [2, 3],
    "explanation": "3 & 4 सही हैं क्योंकि इनमें वाक्य संरचना ठीक है।"
  },
  {
    "question": "Choose the correct option to complete the sentence: I hope you have eaten…………….. because you are traveling and may not stop for lunch.",
    "options": ["So", "Enough", "Too", "Such"],
    "correct": 1,
    "explanation": "'Enough' सही है क्योंकि पर्याप्तता दिखाता है।"
  },
  {
    "question": "Choose the correct option to complete the sentence: ………… To cook so much food every time I come for lunch?",
    "options": ["Must you", "Does you have", "Do you have to", "Does you"],
    "correct": 2,
    "explanation": "'Do you have to' सही प्रश्न रूप है।"
  },
  {
    "question": "Choose the correct option to complete the sentence: We haven’t cleaned it ……………. Ages.",
    "options": ["When", "Since", "For", "How long"],
    "correct": 2,
    "explanation": "'For' समय अवधि दर्शाने के लिए सही है।"
  },
  {
    "question": "Choose the appropriate option to complete the sentence: My father has the ……………… collection of guns from his service days.",
    "options": ["Biggest", "Bigger", "More big", "Big"],
    "correct": 0,
    "explanation": "'Biggest' superlative form के लिए सही है।"
  },
  {
    "question": "Choose the correct option to show possibility: He………………. Be at home, I don’t know for sure.",
    "options": ["Do", "Will", "Must", "Might"],
    "correct": 3,
    "explanation": "'Might' संभावना दर्शाता है।"
  },
  {
    "question": "Choose the correct option to complete the sentence: At nine tomorrow I will …………… writing my English test.",
    "options": ["Have finished", "Am finishing", "Having finished", "Having finish"],
    "correct": 0,
    "explanation": "'Will have finished' future perfect tense है।"
  },
  {
    "question": "Choose the correct option to complete the sentence: When I turn twenty, I will have been ………………… tennis for four years.",
    "options": ["Playing", "Plays", "Played", "Play"],
    "correct": 0,
    "explanation": "'Will have been playing' future perfect continuous tense के लिए सही है।"
  },
  {
    "question": "Choose the correct option to complete the sentence: A nail cutter is a thing………………………. You to trim your nails.",
    "options": ["Where", "When", "Which", "Who"],
    "correct": 2,
    "explanation": "'Which' सही relative pronoun है वस्तु के लिए।"
  },
  {
    "question": "Which Two sentences are correct? 1) The down car broken on the way to work 2) The car broken on the way to work down 3) On the way to work the car broke down 4) The car broke down on the way to work",
    "options": ["3&4", "1&3", "2&4", "1&2"],
    "correct": 0,
    "explanation": "'3' और '4' दोनों सही हैं।"
  },
  {
    "question": "This is the place ………………….. we got our shopping done.",
    "options": ["Who", "Whose", "How", "Where"],
    "correct": 3,
    "explanation": "'Where' सही विकल्प है स्थान के लिए।"
  },
  {
    "question": "The film was ……………………. slow so I didn’t like it.",
    "options": ["Enough", "Such", "So", "Too"],
    "correct": 3,
    "explanation": "'Too slow' नकारात्मक अर्थ में सही है।"
  },
  {
    "question": "Which phrasal verb is used in the sentence 'Sudha studied hard because she didn’t want to let her parents down'?",
    "options": ["Let down", "Studied hard", "Because she", "Want to"],
    "correct": 0,
    "explanation": "'Let down' एक phrasal verb है जिसका अर्थ है निराश करना।"
  },
  {
    "question": "Choose the appropriate option to complete the sentence: That apartment was………………. Than this, I remember.",
    "options": ["Largety", "Largest", "Large", "Larger"],
    "correct": 3,
    "explanation": "'Larger' comparative form है जो तुलना दिखाता है।"
  },
  {
    "question": "Which option is suitable for the sentence: My uncle might come visit us next month.",
    "options": ["None", "Believe it is not true or happening", "Not sure but possible", "Sure about it"],
    "correct": 2,
    "explanation": "'Might' अनिश्चितता दर्शाता है, इसलिए 'Not sure but possible' सही है।"
  },
  {
    "question": "Choose the correct option to complete the sentence: .................... to something means being familiar or habitual to something.",
    "options": ["Been would", "Being used", "Being would", "Been used"],
    "correct": 3,
    "explanation": "'Been used' सही phrase है।"
  },
  {
    "question": "Which option is suitable for the sentence: It must be raining heavy there, I can hear it clearly.",
    "options": ["Sure about it", "Not sure but possible", "Believe it is not true or happening", "None"],
    "correct": 0,
    "explanation": "'Must' निश्चितता दिखाता है, तो 'Sure about it' सही है।"
  },
  {
    "question": "Choose the appropriate option to complete the question: Q: …….............. was the flight landing? Ans: At five in the evening.",
    "options": ["When", "Why", "What", "Whose"],
    "correct": 0,
    "explanation": "'When' सही सवाल है समय पूछने के लिए।"
  },
  {
    "question": "Choose the correct option to complete the sentence: Take care of your spellings and you…………………. score better in English.",
    "options": ["Go to", "Will going", "Are going to", "Going to"],
    "correct": 2,
    "explanation": "'Are going to' भविष्य की योजना दर्शाता है।"
  },
  {
    "question": "Choose the correct option to complete the sentence: Come and see the ……………………….. image on my mobile.",
    "options": ["Clearer", "Cleared", "Clearly", "Clearest"],
    "correct": 0,
    "explanation": "'Clearer' comparative adjective है।"
  },
  {
    "question": "Choose the correct option to complete the sentence: Please go upstairs to your bedroom.",
    "options": ["Your", "Upstairs", "Bedroom", "Go"],
    "correct": 1,
    "explanation": "'Upstairs' यहाँ स्थान बताने के लिए सही है।"
  },
  {
    "question": "Choose the appropriate option to make the positive sentence into negative: Grandmother told many stories. Grandmother did not ……………… many stories.",
    "options": ["Telling", "Told", "Tells", "Tell"],
    "correct": 3,
    "explanation": "'Did not tell' सही negative sentence है।"
  },
  {
    "question": "Which sentence is correct?",
    "options": [
      "You acted as if you are the owner of this place.",
      "You act as if you are the owner of this place.",
      "You act as if you were the owner of this place.",
      "You acting as if you the owner of this place."
    ],
    "correct": 2,
    "explanation": "Second conditional में 'You act as if you were...' सही है।"
  },
  {
    "question": "Choose the correct option to complete the sentence: Rajat …………… for a degree course but he went to work instead.",
    "options": ["Could had do", "Could gone to have", "Could had done", "Could have gone"],
    "correct": 3,
    "explanation": "'Could have gone' सही है क्योंकि यह संभावना बताता है।"
  },
  {
    "question": "Which option is suitable for the sentence: the children must be playing in the park now.",
    "options": [
      "Believe it is not true or happening",
      "Sure about it",
      "Not sure but possible",
      "None"
    ],
    "correct": 1,
    "explanation": "'Must be' यहाँ निश्चितता दर्शाता है, इसलिए 'Sure about it' सही है।"
  },
  {
    "question": "Choose the correct option to complete the sentence: We……………………… expecting so many people to come for the party.",
    "options": [
      "Isn’t",
      "Weren’t",
      "Wasn’t",
      "Aren’t"
    ],
    "correct": 1,
    "explanation": "'Weren’t' सही है क्योंकि past continuous negative form है।"
  },
  {
    "question": "Choose the correct option to complete the sentence: ……………………… my elaborate cooking, no one liked the food.",
    "options": [
      "So",
      "However",
      "In spite of",
      "Due to"
    ],
    "correct": 2,
    "explanation": "'In spite of' सही है क्योंकि इसका मतलब है 'के बावजूद'।"
  },
  {
    "question": "Choose the correct option to complete the sentence: On Thursday, I will have …………… our rent.",
    "options": [
      "Paying",
      "Pays",
      "Paid",
      "Pay"
    ],
    "correct": 2,
    "explanation": "'Will have paid' future perfect tense के लिए सही है।"
  },
  {
    "question": "Choose the correct option to complete the sentence: Q: ……………………. Did you find the place? Ans: I asked a policeman",
    "options": [
      "When",
      "Who",
      "Where",
      "How"
    ],
    "correct": 2,
    "explanation": "'Where' सही प्रश्न है स्थान पूछने के लिए।"
  }
  



     


        
  ],







  science: [
    

    
      


  ],






  history: [
    



    
  ],










  tech: [
      






  ]
};

// Quiz state
let currentCategory = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer = null;
let timeLeft = 30;
let startTime = null;
let endTime = null;
let userAnswers = [];
let streak = 0;
let highScores = JSON.parse(localStorage.getItem('quizHighScores')) || {};
let soundEnabled = true;

// Sound effects
const sounds = {
  correct: new Audio('https://2assets.mixkit.co/active_storage/sfx/2190/2190-preview.mp'),
  wrong: new Audio('https://2assets.mixkit.co/active_storage/sfx/2194/2194-preview.mp'),
  complete: new Audio('https://2assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp')
};

// DOM Elements
const screens = {
  welcome: document.getElementById('welcome-screen'),
  quiz: document.getElementById('quiz-screen'),
  results: document.getElementById('results-screen'),
  review: document.getElementById('review-screen')
};

const elements = {
  categoryButtons: document.querySelectorAll('.category-btn'),
  startButton: document.getElementById('start-quiz'),
  nextButton: document.getElementById('next-question'),
  questionText: document.getElementById('question-text'),
  optionsContainer: document.getElementById('options'),
  currentQuestionNum: document.getElementById('current-question'),
  totalQuestions: document.getElementById('total-questions'),
  progressFill: document.getElementById('progress-fill'),
  timeLeft: document.getElementById('time-left'),
  finalScore: document.getElementById('final-score'),
  correctAnswers: document.getElementById('correct-answers'),
  timeTaken: document.getElementById('time-taken'),
  accuracy: document.getElementById('accuracy'),
  viewAnswers: document.getElementById('view-answers'),
  restartQuiz: document.getElementById('restart-quiz'),
  backToResults: document.getElementById('back-to-results'),
  reviewContainer: document.getElementById('review-container'),
  streakCounter: document.getElementById('streak-counter'),
  soundToggle: document.getElementById('sound-toggle'),
  highScoreDisplay: document.getElementById('high-score')
};

// Event Listeners
elements.categoryButtons.forEach(button => {
  button.addEventListener('click', () => selectCategory(button.dataset.category));
});

elements.startButton.addEventListener('click', startQuiz);
elements.nextButton.addEventListener('click', nextQuestion);
elements.viewAnswers.addEventListener('click', showReviewScreen);
elements.restartQuiz.addEventListener('click', resetQuiz);
elements.backToResults.addEventListener('click', () => showScreen('results'));
elements.soundToggle?.addEventListener('click', toggleSound);

// Functions
function toggleSound() {
  soundEnabled = !soundEnabled;
  elements.soundToggle.innerHTML = soundEnabled ? '🔊' : '🔇';
}

function playSound(type) {
  if (soundEnabled && sounds[type]) {
    sounds[type].currentTime = 0;
    sounds[type].play().catch(() => {});
  }
}

function selectCategory(category) {
  currentCategory = category;
  elements.categoryButtons.forEach(button => {
    button.classList.toggle('selected', button.dataset.category === category);
  });
  elements.startButton.disabled = false;
  
  // Show high score for selected category
  const categoryHighScore = highScores[category] || 0;
  if (elements.highScoreDisplay) {
    elements.highScoreDisplay.textContent = `High Score: ${categoryHighScore}%`;
  }
}

function startQuiz() {
  currentQuestions = [...quizData[currentCategory]];
  shuffleArray(currentQuestions);
  currentQuestionIndex = 0;
  score = 0;
  streak = 0;
  userAnswers = [];
  startTime = new Date();
  
  showScreen('quiz');
  loadQuestion();
  startTimer();
  updateStreakDisplay();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function loadQuestion() {
  const question = currentQuestions[currentQuestionIndex];
  elements.questionText.textContent = question.question;
  elements.currentQuestionNum.textContent = currentQuestionIndex + 1;
  elements.totalQuestions.textContent = currentQuestions.length;
  elements.progressFill.style.width = `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`;
  
  elements.optionsContainer.innerHTML = '';
  question.options.forEach((option, index) => {
    const optionElement = document.createElement('div');
    optionElement.className = 'option';
    optionElement.textContent = option;
    optionElement.addEventListener('click', () => selectOption(index));
    elements.optionsContainer.appendChild(optionElement);
  });
  
  elements.nextButton.disabled = true;
  resetTimer();
}

function selectOption(index) {
  if (elements.nextButton.disabled) {
    const question = currentQuestions[currentQuestionIndex];
    const options = elements.optionsContainer.children;
    const isCorrect = index === question.correct;
    
    Array.from(options).forEach(option => option.classList.remove('selected', 'correct', 'wrong'));
    options[index].classList.add('selected');
    
    // Show correct/wrong immediately
    setTimeout(() => {
      options[question.correct].classList.add('correct');
      if (!isCorrect) {
        options[index].classList.add('wrong');
        streak = 0;
        playSound('wrong');
      } else {
        streak++;
        playSound('correct');
      }
      updateStreakDisplay();
      
      // Show explanation
      const explanationDiv = document.createElement('div');
      explanationDiv.className = 'explanation';
      explanationDiv.textContent = question.explanation;
      elements.optionsContainer.appendChild(explanationDiv);
    }, 300);
    
    elements.nextButton.disabled = false;
    userAnswers[currentQuestionIndex] = index;
  }
}

function updateStreakDisplay() {
  if (elements.streakCounter) {
    elements.streakCounter.textContent = `Streak: ${streak}🔥`;
    elements.streakCounter.style.display = streak > 0 ? 'block' : 'none';
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  
  if (currentQuestionIndex < currentQuestions.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

function startTimer() {
  timeLeft = 30;
  elements.timeLeft.textContent = timeLeft;
  
  timer = setInterval(() => {
    timeLeft--;
    elements.timeLeft.textContent = timeLeft;
    
    // Warning animation when time is low
    if (timeLeft <= 5) {
      elements.timeLeft.classList.add('warning');
    }
    
    if (timeLeft <= 0) {
      clearInterval(timer);
      selectOption(-1); // Auto-select wrong answer
      setTimeout(nextQuestion, 1500);
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  elements.timeLeft.classList.remove('warning');
  startTimer();
}

function endQuiz() {
  clearInterval(timer);
  endTime = new Date();
  calculateResults();
  playSound('complete');
  showScreen('results');
  
  // Update high score
  const finalScore = Math.round((score / currentQuestions.length) * 100);
  if (!highScores[currentCategory] || finalScore > highScores[currentCategory]) {
    highScores[currentCategory] = finalScore;
    localStorage.setItem('quizHighScores', JSON.stringify(highScores));
  }
}

function calculateResults() {
  score = userAnswers.reduce((acc, answer, index) => {
    return acc + (answer === currentQuestions[index].correct ? 1 : 0);
  }, 0);
  
  const timeTaken = Math.floor((endTime - startTime) / 1000);
  const minutes = Math.floor(timeTaken / 60);
  const seconds = timeTaken % 60;
  
  const finalScore = Math.round((score / currentQuestions.length) * 100);
  elements.finalScore.textContent = finalScore;
  elements.correctAnswers.textContent = score;
  elements.timeTaken.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  elements.accuracy.textContent = `${finalScore}%`;
  
  // Animate score circle
  const circle = document.querySelector('.circle-bg path');
  if (circle) {
    const circumference = 100;
    const offset = circumference - (finalScore / 100) * circumference;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = offset;
  }
}

function showReviewScreen() {
  const reviewContainer = document.getElementById('review-container');
  reviewContainer.innerHTML = '';
  
  currentQuestions.forEach((question, index) => {
    const userAnswer = userAnswers[index];
    const isCorrect = userAnswer === question.correct;
    
    const reviewItem = document.createElement('div');
    reviewItem.className = 'review-item';
    reviewItem.innerHTML = `
      <div class="review-question">${index + 1}. ${question.question}</div>
      <div class="review-answer ${isCorrect ? 'correct' : 'wrong'}">
        Your answer: ${userAnswer >= 0 ? question.options[userAnswer] : 'Time Out'}<br>
        ${isCorrect ? '✓ Correct' : `✗ Correct answer: ${question.options[question.correct]}`}
      </div>
      <div class="review-explanation">${question.explanation}</div>
    `;
    
    reviewContainer.appendChild(reviewItem);
  });
  
  showScreen('review');
}

function resetQuiz() {
  currentCategory = null;
  elements.categoryButtons.forEach(button => button.classList.remove('selected'));
  elements.startButton.disabled = true;
  showScreen('welcome');
}

function showScreen(screenId) {
  Object.values(screens).forEach(screen => {
    screen.classList.remove('active');
  });
  screens[screenId].classList.add('active');
}
