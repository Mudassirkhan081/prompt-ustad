/* UI-only glossary. Engine data, generated text and existing storage keys are never translated. */
(function(root){
'use strict';
const rows = [
["Write in English or Roman Urdu. This tool structures your words; it does not translate them or generate an AI answer. Copy the result into your preferred AI tool.", "English ya Roman Urdu mein likhein. Ye tool aapke alfaaz ko structure karta hai; translate nahi karta aur AI ka jawab nahi banata. Prompt apne AI tool mein paste karein.", "Write in English or Roman Urdu. This tool structures your words; it does not translate them or generate an AI answer. Copy the result into your preferred AI tool."],
["Website brief", "Website ka brief", "Website brief"],
["Product copy", "Product ki tafseel", "Product copy"],
["Proposal", "Client proposal", "Proposal"],
["Content plan", "Content plan", "Content plan"],
["Debugging", "Code ka masla", "Debugging"],
["Study", "Seekhna", "Study"],
['Skip to workspace','Prompt editor par jayein','Skip to prompt editor'],
['Workspace navigation','App ke hissay','App navigation'],
['Prompt workspace','Prompt editor','Prompt editor'],
['Prompt studio','Prompt banayein','Generate prompt'],
['Refine result','Jawab behtar karein','Improve response'],
['Techniques','Prompt ke tareeqe','Prompting techniques'],
['Recent prompts','Pichhle prompts','Recent prompts'],
['Sirf is browser mein save hote hain.','Prompts sirf is browser mein save hote hain.','Prompts are saved only in this browser.'],
['Abhi koi saved prompt nahi.','Abhi koi prompt save nahi hua.','No saved prompts yet.'],
['Private by design','Aapka matn niji rehta hai','Your text stays private'],
['Your text stays in this browser.','Aapka matn isi browser mein rehta hai.','Your text stays in this browser.'],
['Runs locally','Isi browser mein chalta hai','Runs in this browser'],
['Switch to light theme','Halka theme lagayein','Switch to light theme'],
['Switch to dark theme','Gehra theme lagayein','Switch to dark theme'],
['New prompt','Naya prompt','New prompt'],
['App language','App ki zubaan','App language'],
['Aapki soch. Behtar prompts.','Aapki problem. Behtar prompt.','Your problem. A better prompt.'],
['Apni problem likhein, blocks dekhein aur prompt copy karein.','Apni problem likhein, prompt ke hissay dekhein aur prompt copy karein.','Describe your problem, review the prompt sections and copy your prompt.'],
['The brief','Aapki problem','Your problem'],
['Acha prompt, aapke idea se shuru hota hai.','Acha prompt, aapki problem ki saaf tafseel se shuru hota hai.','A good prompt starts with a clear description of your problem.'],
['Apni problem likhein','Apni problem likhein','Describe your problem'],
['Required','Zaroori','Required'],
['Brief checklist','Problem ki tafseel ki jaanch','Problem details checklist'],
['Goal','Maqsad','Goal'],['Audience','Kis ke liye','Audience'],['Context','Pas-e-manzar','Context'],
['Role','Maher ka kirdar','Expert role'],['Task','Kaam','Task'],['Format','Jawab ka format','Output format'],['Limits','Pabandiyan','Constraints'],
['ROLE','Maher ka kirdar','Expert role'],['TASK','Kaam','Task'],['CONTEXT','Pas-e-manzar','Context'],['FORMAT','Jawab ka format','Output format'],['CONSTRAINTS','Pabandiyan','Constraints'],
['Roman Urdu ya English — apne alfaaz mein.','Roman Urdu ya English mein apne alfaaz likhein.','Write in your own words in Roman Urdu or English.'],
['Try an example','Misal azmayein','Try an example'],['Try an idea','Misal azmayein','Try an example'],
['Business','Karobar aur marketing','Business and marketing'],['Coding','Coding aur software','Coding and software'],['Study','Padhai','Study'],
['Kaam ki type','Kaam ki qisam','Task category'],['Auto suggest','Khud chunein','Select automatically'],
['General problem','Aam problem','General problem'],['Business & marketing','Karobar aur marketing','Business and marketing'],
['Coding & software','Coding aur software','Coding and software'],['Writing & communication','Tehreer aur rabta','Writing and communication'],
['Learning & study','Padhai','Study'],['Research & analysis','Tehqeeq aur tajziya','Research and analysis'],['Career & interview','Career aur interview','Career and interview'],
['Jawab ki language','Jawab ki zubaan','Response language'],['Same as my problem','Meri problem ki zubaan','Match my problem’s language'],
['Fine-tune your prompt','Mazeed tafseel','More details'],['Context, tone, format & examples','Lehja, format aur misalein','Tone, format and examples'],
['Exact deliverable / success','Maqsad','Goal'],['Audience / kis ke liye?','Kis ke liye','Audience'],['Zaroori background / source material','Pas-e-manzar','Context'],
['Expert role','Maher ka kirdar','Expert role'],['Blank = suggested role','Khali = khud chunein','Blank = suggested role'],
['Output format','Jawab ka format','Output format'],['Task ke mutabiq','Kaam ke mutabiq','Match the task'],['Numbered action plan','Numberwar amli mansooba','Numbered action plan'],
['Bullet points','Nuqaat ki fehrist','Bullet points'],['Table','Table','Table'],['Email','Email','Email'],['Valid JSON','Durust JSON','Valid JSON'],['Code + explanation','Code aur wazahat','Code and explanation'],
['Tone','Lehja','Tone'],['Clear & practical','Saaf aur amli','Clear and practical'],['Professional','Peshawarana','Professional'],['Friendly & simple','Dostana aur saada','Friendly and simple'],['Persuasive','Qail karne wala','Persuasive'],['Formal','Rasmi','Formal'],
['Limits / requirements','Pabandiyan','Constraints'],['Example input + desired output','Aapki misal aur matlooba jawab','Your example and desired response'],['Kya avoid karna hai?','Kin cheezon se parhez ho','What to avoid'],
['Mujhe kis cheez mein madad chahiye?\n\nApna goal, situation aur expected result batayein…','Mujhe kis cheez mein madad chahiye?\n\nApna maqsad, pas-e-manzar aur matlooba jawab batayein.','What do I need help with?\n\nDescribe your goal, context and desired response.'],
['Misal: 7 din ka plan, har din 1 post aur CTA','Misal: 7 din ka mansooba, har din 1 post aur amal ki dawat','Example: A 7-day plan with 1 post and a call to action each day'],
['Misal: Pakistan mein small business owners','Misal: Pakistan mein chhote karobar ke malik','Example: Small business owners in Pakistan'],
['Relevant facts, current situation, budget, document ya code…','Mutaliqa haqaiq, mojooda surat-e-haal, budget, document ya code','Relevant facts, current situation, budget, document or code'],
['Misal: E-commerce marketing strategist','Misal: Online karobar ki marketing ka maher','Example: E-commerce marketing strategist'],
['Misal: 300 words, budget Rs 5,000, sirf free tools','Misal: 300 alfaaz, Rs. 5,000 budget, sirf muft tools','Example: 300 words, a Rs. 5,000 budget, free tools only'],
['Input: …\nDesired output: …\nApna asli example dein; app examples invent nahi karta.','Aapki misal: …\nMatlooba jawab: …\nApni asli misal dein; app misalein khud nahi banata.','Your example: …\nDesired response: …\nSupply your own example; the app does not invent examples.'],
['Misal: jargon, generic advice, unrealistic promises','Misal: Mushkil istilahaat, aam mashware aur ghair-haqeeqi waday','Example: Jargon, generic advice and unrealistic promises'],
['AI se missing information poochne ko kahein','AI se zaroori sawal poochne ko kahein','Ask AI to request essential details'],
['Plan banaye aur result check kare','AI se mansooba banane aur jawab jaanchne ko kahein','Ask AI to plan and check its response'],
['Checkbox final prompt mein AI ko zaroori sawal poochne ki instruction deta hai.','Is option se prompt mein AI ko zaroori sawal poochne ki hidayat milti hai.','This option instructs the AI to ask essential questions in the generated prompt.'],
['Ye details result ko improve karengi','In tafseelat se prompt behtar hoga','These details will improve the prompt'],
['Details add karein','Tafseel shamil karein','Add details'],['Prompt banayein','Prompt banayein','Generate prompt'],['Mujh se sawal karo','Mujh se sawal poochhein','Ask me questions'],
['Ye button abhi aapki brief ke liye missing details ke sawal dikhata hai. AI call nahi hoti.','Ye button aapki problem ki missing tafseel ke sawal dikhata hai. Koi AI request nahi bheji jati.','This button shows questions about missing problem details. No AI request is sent.'],
['Quick generate','Prompt banane ka shortcut','Generate prompt shortcut'],
['Ustad ki islah','Ustad ki islah','Ustad’s review'],['Asal brief se final prompt tak.','Aapki asal problem se aakhri prompt tak.','From your original problem to your final prompt.'],
['Ek prompt ki jhalak','Prompt ki misal','Example prompt'],['Apni problem likhein ya “Try an idea” se shuru karein.','Apni problem likhein ya “Misal azmayein” se shuru karein.','Describe your problem or start with “Try an example”.'],
['Example prompt, not your generated output','Ye sirf misal hai; aapka banaya hua prompt nahi.','This is an example, not your generated prompt.'],
['Aapki asal baat','Aapki asal problem','Your original problem'],['No filler match','Alfaaz ke liye koi tajweez nahi','No wording suggestions'],
['Red pen: wording suggestions, AI judgement nahi. Asal text aur facts final TASK mein preserve rehte hain.','Surkh nishan alfaaz ki tajaveez hain, AI ka faisla nahi. Asal matn aur haqaiq Kaam ke hissay mein rehte hain.','Red marks are wording suggestions, not AI judgments. Original text and facts remain in the Task section.'],
['Polite filler: is lafz ke baghair bhi task clear reh sakta hai.','Is lafz ke baghair bhi kaam saaf reh sakta hai.','The task may remain clear without this filler word.'],
['Vague wording: iski jagah measurable result, tone ya example dein.','Iski jagah naapa ja sakne wala maqsad, lehja ya misal dein.','Replace this vague wording with a measurable goal, tone or example.'],
['Prompt completeness','Prompt ki takmeel','Prompt completeness'],['Completeness: free-edit mode','Prompt ki takmeel: azad editing mein jaanch band hai','Prompt completeness: checking paused in free edit'],['Completeness rules','Prompt ki takmeel ke qawaid','Prompt completeness rules'],
['Presence checks: Task, Role, Format, Audience, Context aur Limits. Ye quality rating nahi hai; toggles ke saath score badalta hai.','Kaam, maher ka kirdar, jawab ka format, kis ke liye, pas-e-manzar aur pabandiyan ki mojoodgi dekhi jati hai. Ye mayar ki rating nahi. Hissay shamil ya band karne se ginti badalti hai.','Checks whether task, expert role, output format, audience, context and constraints are present. This is not a quality rating. Including or excluding sections changes the count.'],
['TASK block mein request hai.','Kaam ke hissay mein aapki darkhwast mojood hai.','Your request is present in the Task section.'],['ROLE block mein expert role hai.','Maher ka kirdar mojood hai.','An expert role is present.'],
['FORMAT block mein format/language/tone instructions hain.','Jawab ka format, zubaan aur lehja ki hidayaat mojood hain.','Instructions for output format, language and tone are present.'],
['Audience field ya matched audience wording maujood hai.','“Kis ke liye” ki tafseel field ya aapki problem mein mojood hai.','Audience details are present in the field or your problem.'],
['Background field ya original situation ka excerpt maujood hai.','Pas-e-manzar ki tafseel field ya aapki problem mein mojood hai.','Context is present in the field or your problem.'],
['Limits field ya budget/length/deadline/avoid wording maujood hai.','Pabandiyan, budget, lambai, aakhri tareekh ya parhez ki tafseel mojood hai.','Constraints, budget, length, deadline or exclusions are present.'],
['Abhi clear evidence nahi mila; Details mein add kar sakte hain.','Saaf tafseel nahi mili. Mazeed tafseel mein shamil karein.','No clear details found. Add them under More details.'],
['Prompt ke blocks','Prompt ke hissay','Prompt sections'],['Compact','Mukhtasar','Compact'],['On','Shamil','Included'],['Off','Shamil nahi','Excluded'],
['Block off karein to woh final prompt se nikal jayega. Open karke text edit kar sakte hain. Compact boilerplate ko chhota karta hai; aapke facts aur edits preserve rehte hain.','Hissa band karne se woh aakhri prompt se nikal jayega. Hissa khol kar matn badal sakte hain. Mukhtasar mode aam hidayaat chhoti karta hai; aapke haqaiq aur tabdeeliyan barqarar rehti hain.','Excluding a section removes it from the final prompt. Open a section to edit its text. Compact mode shortens standard instructions while preserving your facts and edits.'],
['Text dekhein / edit karein','Matn dekhein aur badlein','View and edit text'],['Block edit final prompt mein update ho gaya.','Hissay ki tabdeeli aakhri prompt mein shamil ho gayi.','The section edit is reflected in the final prompt.'],
['Compact mode: facts aur edits preserved hain.','Mukhtasar mode lag gaya. Haqaiq aur tabdeeliyan barqarar hain.','Compact mode enabled. Facts and edits are preserved.'],['Full mode restore ho gaya.','Poora mode bahal ho gaya.','Full mode restored.'],
['Headings badli hain: free-edit mode active hai. Copy aur download kaam karte hain. Block controls restore karne par ye edited draft Recent prompts mein alag save hoga.','Headings badalne se azad editing shuru ho gayi hai. Copy aur download dastiyab hain. Prompt ke hissay bahal karne par ye badla hua draft Pichhle prompts mein alag save hoga.','Changed headings enabled free edit. Copy and download remain available. Restoring prompt sections will save this edited draft separately in Recent prompts.'],
['Blocks restore karein','Prompt ke hissay bahal karein','Restore prompt sections'],['Final prompt — editable','Aakhri prompt — tabdeeli kar sakte hain','Final prompt — editable'],
['Block ya final prompt dono edit kar sakte hain. ROLE / TASK / CONTEXT / FORMAT / CONSTRAINTS headings rakhein to edits blocks ke saath sync rehte hain.','Hissay ya aakhri prompt ka matn badal sakte hain. Dono ko jura rakhne ke liye ROLE, TASK, CONTEXT, FORMAT aur CONSTRAINTS headings barqarar rakhein.','Edit individual sections or the final prompt. Keep the ROLE, TASK, CONTEXT, FORMAT and CONSTRAINTS headings to keep both in sync.'],
['Edited','Tabdeeli ho gayi','Edited'],['Edited prompt copy/download ke liye ready hai.','Badla hua prompt copy aur download ke liye tayyar hai.','The edited prompt is ready to copy or download.'],
['Blocks restored; free-edit draft Recent prompts mein safe hai.','Prompt ke hissay bahal ho gaye. Azad editing ka draft Pichhle prompts mein save hai.','Prompt sections restored. The free-edit draft is saved in Recent prompts.'],
['Task ki category se expert role liya gaya hai; aapka custom role ho to usay priority milti hai.','Kaam ki qisam se maher ka kirdar chuna gaya hai. Aapka diya hua kirdar pehle use hota hai.','The task category supplies the expert role. Your custom role takes priority.'],
['Original request aur deliverable preserve hain. Full mode mein task-specific workflow aur selected clarification/reasoning instructions shamil hain.','Asal darkhwast aur maqsad barqarar hain. Poora mode kaam ke marahil aur chuni hui sawal aur jaanch ki hidayaat shamil karta hai.','The original request and goal are preserved. Full mode includes task steps and the selected clarification and checking instructions.'],
['Audience, background aur supplied example yahan group kiye hain. Detected excerpts original text se liye hain, naye facts nahi banaye.','Kis ke liye, pas-e-manzar aur aapki misal yahan shamil hain. Milne wali tafseel asal matn se li gayi hai; naye haqaiq nahi banaye gaye.','Audience, context and your example are grouped here. Detected details come from your original text; no new facts are invented.'],
['Aapka selected format, jawab ki language aur tone. Specific task requirements ko priority milti hai.','Aapka chuna hua jawab ka format, jawab ki zubaan aur lehja. Kaam ki khaas zarooriyat ko tarjeeh milti hai.','Your selected output format, response language and tone. Specific task requirements take priority.'],
['Limits, avoid list aur category-specific factual safeguards. Original request ke andar ke limits TASK mein bhi preserved rehte hain.','Pabandiyan, parhez aur haqaiq se mutaliq hidayaat yahan hain. Asal problem ki pabandiyan Kaam ke hissay mein bhi rehti hain.','Constraints, exclusions and factual safeguards are grouped here. Constraints in the original problem also remain in the Task section.'],
['Pehle draft ko aur behtar karein','Pehla jawab aur behtar karein','Improve the first response'],
['AI ka pehla jawab milne ke baad, isi chat mein ye follow-up use karein.','AI ka pehla jawab milne ke baad isi chat mein behtari ka prompt use karein.','After receiving the AI’s first response, use the refinement prompt in the same chat.'],
['Kya change chahiye?','Kya tabdeeli chahiye?','What should change?'],['Misal: Shorter karein, practical examples dein aur tone friendly rakhein.','Misal: Jawab mukhtasar karein, amli misalein dein aur lehja dostana rakhein.','Example: Shorten the response, add practical examples and use a friendly tone.'],
['Follow-up banayein','Behtari ka prompt banayein','Generate refinement prompt'],['Refinement prompt — editable','Behtari ka prompt — tabdeeli kar sakte hain','Refinement prompt — editable'],
['Isi AI conversation mein follow-up paste karein.','Behtari ka prompt isi AI chat mein paste karein.','Paste the refinement prompt into the same AI chat.'],['Follow-up clipboard par copy karein','Behtari ka prompt clipboard par copy karein','Copy the refinement prompt to the clipboard'],
['10 prompting techniques','Prompt ke 10 tareeqe','10 prompting techniques'],['Course ke 10 methods ka practical implementation. Har task ko har technique ki zarurat nahi hoti.','Course ke 10 tareeqon ka amli istemal. Har kaam mein har tareeqa zaroori nahi.','Practical use of the course’s 10 techniques. Not every task needs every technique.'],
['Applied','Istemal hua','Applied'],['Be specific','Wazeh tafseel dein','Be specific'],['Assign a role','Maher ka kirdar dein','Assign an expert role'],['Specify output','Jawab ka format batayein','Specify the output format'],['Give examples','Misalein dein','Give examples'],['Reason and check','Soch kar jaanch karein','Reason and check'],['Constraints','Pabandiyan','Constraints'],['Iterative refinement','Jawab behtar karein','Improve response'],['Task decomposition','Kaam ko marahil mein baantein','Break the task into steps'],['Ask questions','Zaroori sawal poochhein','Ask essential questions'],['Negative prompting','Parhez batayein','Specify what to avoid'],
['Problem, audience aur deliverable ko specific banayein.','Problem, kis ke liye aur maqsad ko wazeh karein.','Make the problem, audience and goal specific.'],['Task ke liye relevant expert role.','Kaam ke liye munasib maher ka kirdar chunein.','Choose an expert role suited to the task.'],['Format, tone aur jawab ki language.','Jawab ka format, lehja aur zubaan tay karein.','Set the output format, tone and language.'],['Aapke supplied input/output example ki guidance.','Apni misal aur matlooba jawab se rehnumai dein.','Provide guidance through your example and desired response.'],['Careful work aur result ki verification.','Kaam ehtiyat se karne aur jawab jaanchne ki hidayat dein.','Request careful work and verification of the response.'],['Scope, budget, length aur factual boundaries.','Daira, budget, lambai aur haqaiq ki hadain tay karein.','Set boundaries for scope, budget, length and factual accuracy.'],['Same conversation mein generated follow-up.','Isi chat mein behtari ka prompt use karein.','Use a refinement prompt in the same chat.'],['Full mode ka numbered task workflow.','Poora mode ka numberwar mansooba use karein.','Use the numbered workflow in Full mode.'],['Essential missing information par sawal.','Zaroori tafseel na ho to sawal poochne ki hidayat dein.','Request clarification when essential details are missing.'],['Unwanted output aur failure modes ko avoid karein.','Na-chahiye jawab aur ghaltiyon se bachne ki hidayat dein.','Identify unwanted output and errors to avoid.'],
['Add context','Pas-e-manzar shamil karein','Add context'],['Specificity · Decomposition','Wazeh tafseel dein · Kaam ko marahil mein baantein','Be specific · Break the task into steps'],['Context · Examples','Pas-e-manzar · Misalein dein','Context · Give examples'],['Constraints · Negative prompting','Pabandiyan · Parhez batayein','Constraints · Specify what to avoid'],
['Example preview','Misal dikhayi ja rahi hai','Example preview'],['Inputs changed','Tafseel badal gayi','Details changed'],['Prompt ready','Prompt tayyar hai','Prompt ready'],['Pehle prompt banayein.','Pehle prompt banayein.','Generate a prompt first.'],['Pehle prompt banayein','Pehle prompt banayein.','Generate a prompt first.'],
['Blocks check karein; final prompt copy ke liye ready hai.','Prompt ke hissay jaanch lein. Aakhri prompt copy ke liye tayyar hai.','Review the prompt sections. The final prompt is ready to copy.'],['Updated input ke liye prompt dobara banayein.','Badli hui tafseel ke liye prompt dobara banayein.','Generate the prompt again to include the changed details.'],
['Copy Prompt','Prompt copy karein','Copy prompt'],['Copied','Copy ho gaya','Copied'],['Final prompt clipboard par copy karein','Aakhri prompt clipboard par copy karein','Copy the final prompt to the clipboard'],['Copied — apne AI mein paste karein.','Copy ho gaya. Apni AI chat mein paste karein.','Copied. Paste it into your AI chat.'],['Prompt copied to clipboard','Prompt clipboard par copy ho gaya.','Prompt copied to the clipboard.'],
['Text selected hai. Ctrl+C / Cmd+C se copy karein.','Matn select ho gaya hai. Ctrl+C ya Cmd+C se copy karein.','Text selected. Press Ctrl+C or Cmd+C to copy.'],['Browser copy unavailable: Ctrl+C / Cmd+C use karein.','Browser se copy nahi ho saka. Ctrl+C ya Cmd+C use karein.','Browser copy failed. Use Ctrl+C or Cmd+C.'],['Download .txt','.txt download karein','Download .txt'],['Download tayyar hai.','Download tayyar hai.','Download ready.'],['Draft is browser mein saved hai.','Draft isi browser mein save hai.','Draft saved in this browser.'],
['Browser storage unavailable/full hai. Prompt copy/download karke save karein.','Browser mein save nahi ho saka; jagah kam ya storage band ho sakti hai. Prompt copy ya download karke save karein.','Browser storage is unavailable or full. Copy or download your prompt to save it.'],['Saved prompt restore ho gaya.','Save kiya hua prompt bahal ho gaya.','Saved prompt restored.'],['Problem ko thora detail mein likhein (kam az kam 8 characters).','Apni problem kam az kam 8 characters mein likhein.','Describe your problem using at least 8 characters.'],['Feedback is too long.','Tabdeeli ki darkhwast 3,000 characters se zyada hai.','The requested changes exceed 3,000 characters.'],['Invalid input','Di gayi maloomat durust nahi.','The supplied information is invalid.'],
['Basic details text mein mil gayi hain. Agar zaroorat ho to Details mein example ya limits add karein.','Bunyadi tafseel mil gayi hai. Zaroorat ho to Mazeed tafseel mein misal ya pabandiyan shamil karein.','The basic details are present. Add an example or constraints under More details if needed.'],
['Aapko exactly kya deliverable chahiye?','Aapko kya tayyar karwana hai?','What would you like produced?'],['Ye kis ke liye hai aur unka experience level kya hai?','Ye kis ke liye hai aur unka tajurba kitna hai?','Who is this for, and what is their experience level?'],['Background, deadline ya budget ki kaunsi details zaroori hain?','Pas-e-manzar, aakhri tareekh ya budget ki kaunsi tafseel zaroori hai?','Which context, deadline or budget details matter?'],
['Exact result kya chahiye: content plan, sales strategy ya ad copy?','Aapko content ka mansooba, farokht ki hikmat-e-amli ya ishtihar ka matn chahiye?','Do you need a content plan, sales strategy or advertising copy?'],['Customers kaun hain, aur product/offer kya hai?','Customers kaun hain aur product ya offer kya hai?','Who are the customers, and what is the product or offer?'],['Budget, location, channel aur available time kya hai?','Budget, ilaqa, platform aur dastiyab waqt kya hai?','What are the budget, location, platform and available time?'],
['Expected behavior aur actual behavior kya hai?','Software ko kya karna chahiye aur abhi kya ho raha hai?','What should the software do, and what happens now?'],['Ye kis user/use case ke liye hai?','Ye kis user aur kis kaam ke liye hai?','Which user and use case is this for?'],['Language/framework, error message aur relevant code kya hai?','Programming language, framework, error message aur mutaliqa code kya hai?','What are the programming language, framework, error message and relevant code?'],
['Email, post, script ya koi aur exact deliverable chahiye?','Aapko email, post, script ya koi aur matn chahiye?','Do you need an email, post, script or another piece of writing?'],['Reader kaun hai, aur unse kya response chahte hain?','Parhne wala kaun hai aur aap us se kya karwana chahte hain?','Who is the reader, and what action should they take?'],['Kaunse facts, offer ya message include karna zaroori hai?','Kaunse haqaiq, offer ya paigham shamil karna zaroori hai?','Which facts, offer or message must be included?'],
['Konsa topic ya exam, aur target kya hai?','Kaunsa mauzu ya imtihan hai aur aapka maqsad kya hai?','What is the topic or exam, and what is your goal?'],['Aapka current level kya hai?','Aapki mojooda samajh kis satah par hai?','What is your current level of understanding?'],['Roz kitna time hai aur deadline kab hai?','Roz kitna waqt milta hai aur aakhri tareekh kya hai?','How much time is available daily, and what is the deadline?'],
['Research ka exact sawal ya comparison kya hai?','Tehqeeq ka wazeh sawal ya muqabla kya hai?','What is the specific research question or comparison?'],['Report kis audience ya decision ke liye hai?','Report kis ke liye hai aur kis faisle mein madad degi?','Who is the report for, and which decision will it support?'],['Sources, scope, date range aur region kya hai?','Zaraye, daira, tareekhon ki muddat aur ilaqa kya hai?','What are the sources, scope, date range and region?'],
['CV, cover letter, interview prep ya career plan chahiye?','Aapko CV, cover letter, interview ki tayari ya career ka mansooba chahiye?','Do you need a CV, cover letter, interview preparation or career plan?'],['Target role/company aur experience level kya hai?','Matlooba ohda, company aur tajurbe ki satah kya hai?','What are the target role, company and experience level?'],['Job description aur apni real achievements kya hain?','Naukri ki tafseel aur aapki asli kamyabiyan kya hain?','What are the job description and your actual achievements?'],
];
const catalog=new Map(rows.map(([key,ru,en])=>[key,{ru,en}]));
const storageKey='prompt-ustad-ui-language-v1'; // New, separate preference; existing keys are untouched.
let language='ru';
const bindings=new Map();
const fields={problem:'Apni problem likhein',goal:'Goal',audience:'Audience',context:'Context',role:'Role',limits:'Limits',example:'Example input + desired output',avoid:'Kya avoid karna hai?'};
function translate(value,lang=language){
 const raw=String(value??''),s=raw.trim(),ru=lang!=='en';
 const direct=catalog.get(s);if(direct)return raw.replace(s,direct[ru?'ru':'en']);
 let m;
 if((m=s.match(/^([✓○]) (.+)$/)))return m[1]+' '+translate(m[2],lang);
 if((m=s.match(/^Prompt completeness (\d+)\/6$/)))return translate('Prompt completeness',lang)+': '+m[1]+'/6';
 if((m=s.match(/^(\d+) wording suggestions?$/)))return (ru?'Alfaaz behtar karne ki tajaveez: ':'Wording suggestions: ')+m[1];
 if((m=s.match(/^(Suggested|Selected): (.+)$/)))return (m[1]==='Suggested'?(ru?'Tajweez: ':'Suggested: '):(ru?'Intikhab: ':'Selected: '))+translate(m[2],lang);
 if((m=s.match(/^(\d+) words · ([\d,]+) characters$/)))return m[1]+(ru?' alfaaz · ':' words · ')+m[2]+' characters';
 if((m=s.match(/^([\d,]+) \/ 12,000$/)))return m[1]+' / 12,000 characters';
 if(s.startsWith('Detected: '))return (ru?'Mila: ':'Detected: ')+s.slice(10);
 if((m=s.match(/^(Restore|Remove) recent prompt: ([\s\S]*)$/)))return (m[1]==='Restore'?(ru?'Pichhla prompt bahal karein: ':'Restore recent prompt: '):(ru?'Pichhla prompt hatayein: ':'Remove recent prompt: '))+m[2];
 if((m=s.match(/^Include (ROLE|TASK|CONTEXT|FORMAT|CONSTRAINTS) block$/)))return ru?translate(m[1],lang)+' shamil karein':'Include '+translate(m[1],lang);
 if((m=s.match(/^(ROLE|TASK|CONTEXT|FORMAT|CONSTRAINTS) block text$/)))return translate(m[1],lang)+(ru?' ka matn':' text');
 if((m=s.match(/^(ROLE|TASK|CONTEXT|FORMAT|CONSTRAINTS)( shamil ho gaya\.| final prompt se hata diya\.)$/)))return translate(m[1],lang)+(m[2].startsWith(' shamil')?(ru?' shamil ho gaya.':' included.'):(ru?' aakhri prompt se nikal gaya.':' excluded from the final prompt.'));
 if((m=s.match(/^Invalid (problem|goal|audience|context|role|limits|example|avoid)$/)))return ru?translate(fields[m[1]],lang)+' mein durust maloomat dein.':'Enter a valid value for '+translate(fields[m[1]],lang)+'.';
 if((m=s.match(/^(problem|goal|audience|context|role|limits|example|avoid) is too long\.$/)))return ru?translate(fields[m[1]],lang)+' mein matn ki ijazat se zyada lambai hai.':'The text in '+translate(fields[m[1]],lang)+' exceeds the allowed length.';
 if(/^\d+\. /.test(s))return s.split('\n').map(line=>line.replace(/^(\d+\. )(.+)$/,(_,n,q)=>n+translate(q,lang))).join('\n');
 for(const reason of ['Polite filler: is lafz ke baghair bhi task clear reh sakta hai.','Vague wording: iski jagah measurable result, tone ya example dein.'])if(s.endsWith('. '+reason))return s.slice(0,-reason.length)+translate(reason,lang);
 return raw;
}
function paint(node,binding){const value=translate(binding.source);if(binding.attr)node.setAttribute(binding.attr,value);else if(node.nodeType===3)node.nodeValue=value;else node.textContent=value;}
function bind(node,source,attr){let entries=bindings.get(node);if(!entries){entries=new Map();bindings.set(node,entries);}const binding={source:String(source??''),attr};entries.set(attr||'text',binding);paint(node,binding);}
let prunePending=false;
function text(node,source){
 if(node.nodeType===3){bind(node,source);return;}
 node.textContent='';const leaf=document.createTextNode('');node.append(leaf);bind(leaf,source);
 if(!prunePending){prunePending=true;queueMicrotask(()=>{prunePending=false;for(const item of bindings.keys())if(!item.isConnected)bindings.delete(item);});}
}
function attr(node,name,source){bind(node,source,name);}
function refresh(){
 for(const [node,entries]of bindings){if(!node.isConnected){bindings.delete(node);continue;}for(const b of entries.values())paint(node,b);}
 document.documentElement.lang=language==='en'?'en':'ur-Latn';
 document.documentElement.dataset.uiLanguage=language;
 document.querySelectorAll('[data-ui-language]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.uiLanguage===language)));
}
function setLanguage(value){language=value==='en'?'en':'ru';try{localStorage.setItem(storageKey,language);}catch{}refresh();}
function init(){
 try{language=localStorage.getItem(storageKey)==='en'?'en':'ru';}catch{}
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);const nodes=[];let node;
 while((node=walker.nextNode()))if(!node.parentElement.closest('script,style,textarea,svg,.ghost-prompt'))nodes.push(node);
 for(const item of nodes)if(catalog.has(item.nodeValue.trim())||/^\d+ \/ 12,000$/.test(item.nodeValue.trim())||/^Prompt completeness \d+\/6$/.test(item.nodeValue.trim()))text(item,item.nodeValue);
 for(const el of document.querySelectorAll('[placeholder],[aria-label],[title]'))for(const name of ['placeholder','aria-label','title']){const value=el.getAttribute(name);if(value&&catalog.has(value.trim()))attr(el,name,value);}
 const preview=document.querySelector('.ghost-prompt');
 if(preview){const original=preview.textContent;catalog.set(original.trim(),{en:original,ru:'ROLE\nSabr se samjhane wale ustad ka kirdar ada karein.\n\nTASK\nNaye seekhne wale ko linear equations samjhayein.\n\nCONTEXT\nJamaat 9 ka talib-e-ilm, jiske paas padhai ke liye 30 minute hain.\n\nFORMAT\nSaada wazahat aur hal ki hui misal.\n\nCONSTRAINTS\nEk waqt mein ek tasawwur. Mushkil istilah bina wazahat use na karein.'});text(preview,original);}
 document.querySelectorAll('[data-ui-language]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.uiLanguage)));
 refresh();
}
const api={translate,text,attr,init,setLanguage,storageKey,rows};
if(typeof module!=='undefined'&&module.exports)module.exports=api;else{root.PromptUI=api;init();}
})(typeof window!=='undefined'?window:this);
