const translations = {
  en: {
    language: 'Language', english: 'English', hindi: 'हिन्दी', tamil: 'தமிழ்', marathi: 'मराठी', telugu: 'తెలుగు',
    subtitle: 'Care & Diagnostic Portal', patientLogin: 'Patient Login', doctorLogin: 'Doctor Login', fullName: 'Full Name', enterName: 'Enter your full name', phone: 'Phone Number', password: 'Password', enterPassword: 'Enter your password', confirmPassword: 'Confirm Password', reenterPassword: 'Re-enter your password', patientId: 'Patient ID', doctorId: 'Doctor Registration ID', patientIdExample: 'e.g. CHH-000001', doctorIdExample: 'e.g. DOC-502', phoneExample: 'e.g. 9876543210', createAccount: 'Create Patient Account', loginAsPatient: 'Log In as Patient', loginAsDoctor: 'Log In as Doctor', completeFields: 'Please complete all sign-up fields.', passwordsMismatch: 'Passwords do not match.', bothCredentials: 'Please enter both ID and Password.', newPatient: 'New patient?', alreadyRegistered: 'Already registered?', signupHere: 'Sign up here', loginHere: 'Log in here',
    patientPortal: 'Patient Portal', doctorPortal: 'Doctor Portal', signedInAs: 'Signed in as', patient: 'Patient', doctor: 'Doctor', logout: 'Log out', careWorkspace: 'Care team workspace', healthSpace: 'Your health space', welcomeBack: 'Welcome back', carePrompt: 'Keep your health information ready for your care team.', patientIdLabel: 'Patient ID:', preVisitTab: '1. Pre-Visit Information', postVisitTab: '2. Post-Visit Reports', preVisitTitle: 'Tell us how you are feeling', preVisitDescription: 'This information helps your cardiology team prepare for your visit.', optionalFields: 'All fields are optional', age: 'Age (years)', temperature: 'Temperature (°F)', weight: 'Weight (kg)', systolic: 'Blood pressure — top number', diastolic: 'Blood pressure — bottom number', medicines: 'Current medicines', medicinePlaceholder: 'List medicine names and doses, if any', savePreVisit: 'Save Pre-Visit Information', saveSuccess: 'Your pre-visit information has been saved.', uploadTitle: 'Upload scan or report', uploadDescription: 'Add a PDF, image, or document after your hospital visit.', chooseFile: 'Choose a file to upload', supportedFiles: 'PDF, JPG, PNG, or other report file', uploadSuccess: 'Your report was uploaded successfully.', noReports: 'No reports uploaded yet.', uploadedReport: 'Uploaded report', loading: 'Loading your secure portal…', patientDirectory: 'Patient directory', registeredPatients: 'registered patients', emptyPatients: 'Patient records will appear here after a patient signs up.', selectPatient: 'Select a patient', choosePatient: 'Choose a patient from the directory to view their details.', patientDetail: 'Patient detail', phoneLabel: 'Phone:', notProvided: 'Not provided', lastUpdated: 'Last updated', readyReview: 'Ready for review', latestReading: 'Latest reading', listed: 'listed', meds: 'meds', currentMedicines: 'Current medicines', reviewAtVisit: 'Review at visit', noMedicines: 'No medicines listed.', scansReports: 'Scans and reports', file: 'file', files: 'files', noScans: 'No scans or reports uploaded yet.', openPreview: 'Open preview ↗', bloodPressure: 'Blood pressure', ageLabel: 'Age', years: 'years', chartsLabel: 'Blood pressure trend chart'
  },
  hi: {
    language: 'भाषा', english: 'English', hindi: 'हिन्दी', tamil: 'தமிழ்', marathi: 'मराठी', telugu: 'తెలుగు',
    subtitle: 'देखभाल और जाँच पोर्टल', patientLogin: 'मरीज़ लॉग इन', doctorLogin: 'डॉक्टर लॉग इन', fullName: 'पूरा नाम', enterName: 'अपना पूरा नाम लिखें', phone: 'फ़ोन नंबर', password: 'पासवर्ड', enterPassword: 'अपना पासवर्ड लिखें', confirmPassword: 'पासवर्ड की पुष्टि करें', reenterPassword: 'पासवर्ड फिर से लिखें', patientId: 'मरीज़ आईडी', doctorId: 'डॉक्टर पंजीकरण आईडी', patientIdExample: 'जैसे CHH-000001', doctorIdExample: 'जैसे DOC-502', phoneExample: 'जैसे 9876543210', createAccount: 'मरीज़ खाता बनाएँ', loginAsPatient: 'मरीज़ के रूप में लॉग इन करें', loginAsDoctor: 'डॉक्टर के रूप में लॉग इन करें', completeFields: 'कृपया साइन-अप के सभी फ़ील्ड भरें।', passwordsMismatch: 'पासवर्ड मेल नहीं खाते।', bothCredentials: 'कृपया आईडी और पासवर्ड दोनों भरें।', newPatient: 'नए मरीज़ हैं?', alreadyRegistered: 'पहले से पंजीकृत हैं?', signupHere: 'यहाँ साइन अप करें', loginHere: 'यहाँ लॉग इन करें',
    patientPortal: 'मरीज़ पोर्टल', doctorPortal: 'डॉक्टर पोर्टल', signedInAs: 'लॉग इन हैं:', patient: 'मरीज़', doctor: 'डॉक्टर', logout: 'लॉग आउट', careWorkspace: 'चिकित्सा टीम कार्यक्षेत्र', healthSpace: 'आपका स्वास्थ्य पोर्टल', welcomeBack: 'वापसी पर स्वागत है', carePrompt: 'अपनी स्वास्थ्य जानकारी चिकित्सा टीम के लिए तैयार रखें।', patientIdLabel: 'मरीज़ आईडी:', preVisitTab: '1. मुलाक़ात से पहले की जानकारी', postVisitTab: '2. मुलाक़ात के बाद की रिपोर्ट', preVisitTitle: 'बताएँ कि आप कैसा महसूस कर रहे हैं', preVisitDescription: 'इस जानकारी से हृदय रोग विशेषज्ञ आपकी मुलाक़ात की तैयारी कर सकते हैं।', optionalFields: 'सभी फ़ील्ड वैकल्पिक हैं', age: 'उम्र (वर्ष)', temperature: 'तापमान (°F)', weight: 'वज़न (किग्रा)', systolic: 'ब्लड प्रेशर — ऊपर की संख्या', diastolic: 'ब्लड प्रेशर — नीचे की संख्या', medicines: 'वर्तमान दवाएँ', medicinePlaceholder: 'दवा का नाम और मात्रा लिखें, यदि लागू हो', savePreVisit: 'मुलाक़ात से पहले की जानकारी सहेजें', saveSuccess: 'आपकी जानकारी सहेज ली गई है।', uploadTitle: 'स्कैन या रिपोर्ट अपलोड करें', uploadDescription: 'अस्पताल की मुलाक़ात के बाद PDF, चित्र या दस्तावेज़ जोड़ें।', chooseFile: 'अपलोड करने के लिए फ़ाइल चुनें', supportedFiles: 'PDF, JPG, PNG या अन्य रिपोर्ट फ़ाइल', uploadSuccess: 'आपकी रिपोर्ट सफलतापूर्वक अपलोड हुई।', noReports: 'अभी कोई रिपोर्ट अपलोड नहीं हुई।', uploadedReport: 'अपलोड की गई रिपोर्ट', loading: 'आपका सुरक्षित पोर्टल खुल रहा है…', patientDirectory: 'मरीज़ सूची', registeredPatients: 'पंजीकृत मरीज़', emptyPatients: 'मरीज़ के साइन अप करने पर उनकी जानकारी यहाँ दिखेगी।', selectPatient: 'मरीज़ चुनें', choosePatient: 'जानकारी देखने के लिए सूची से मरीज़ चुनें।', patientDetail: 'मरीज़ का विवरण', phoneLabel: 'फ़ोन:', notProvided: 'नहीं दिया गया', lastUpdated: 'आख़िरी अपडेट', readyReview: 'जाँच के लिए तैयार', latestReading: 'नवीनतम रीडिंग', listed: 'सूचीबद्ध', meds: 'दवाएँ', currentMedicines: 'वर्तमान दवाएँ', reviewAtVisit: 'मुलाक़ात पर जाँचें', noMedicines: 'कोई दवा दर्ज नहीं है।', scansReports: 'स्कैन और रिपोर्ट', file: 'फ़ाइल', files: 'फ़ाइलें', noScans: 'अभी कोई स्कैन या रिपोर्ट अपलोड नहीं हुई।', openPreview: 'पूर्वावलोकन खोलें ↗', bloodPressure: 'ब्लड प्रेशर', ageLabel: 'उम्र', years: 'वर्ष', chartsLabel: 'ब्लड प्रेशर का चार्ट'
  },
  ta: {
    language: 'மொழி', english: 'English', hindi: 'हिन्दी', tamil: 'தமிழ்', marathi: 'मराठी', telugu: 'తెలుగు',
    subtitle: 'சிகிச்சை மற்றும் பரிசோதனை தளம்', patientLogin: 'நோயாளர் உள்நுழைவு', doctorLogin: 'மருத்துவர் உள்நுழைவு', fullName: 'முழுப் பெயர்', enterName: 'உங்கள் முழுப் பெயரை உள்ளிடவும்', phone: 'தொலைபேசி எண்', password: 'கடவுச்சொல்', enterPassword: 'கடவுச்சொல்லை உள்ளிடவும்', confirmPassword: 'கடவுச்சொல்லை உறுதிப்படுத்தவும்', reenterPassword: 'கடவுச்சொல்லை மீண்டும் உள்ளிடவும்', patientId: 'நோயாளர் எண்', doctorId: 'மருத்துவர் பதிவு எண்', patientIdExample: 'எ.கா. CHH-000001', doctorIdExample: 'எ.கா. DOC-502', phoneExample: 'எ.கா. 9876543210', createAccount: 'நோயாளர் கணக்கை உருவாக்கவும்', loginAsPatient: 'நோயாளராக உள்நுழையவும்', loginAsDoctor: 'மருத்துவராக உள்நுழையவும்', completeFields: 'பதிவு படிவத்தின் அனைத்து விவரங்களையும் நிரப்பவும்.', passwordsMismatch: 'கடவுச்சொற்கள் பொருந்தவில்லை.', bothCredentials: 'எண் மற்றும் கடவுச்சொல் இரண்டையும் உள்ளிடவும்.', newPatient: 'புதிய நோயாளியா?', alreadyRegistered: 'ஏற்கனவே பதிவு செய்துள்ளீர்களா?', signupHere: 'இங்கே பதிவு செய்யவும்', loginHere: 'இங்கே உள்நுழையவும்',
    patientPortal: 'நோயாளர் தளம்', doctorPortal: 'மருத்துவர் தளம்', signedInAs: 'உள்நுழைந்தவர்:', patient: 'நோயாளர்', doctor: 'மருத்துவர்', logout: 'வெளியேறு', careWorkspace: 'மருத்துவக் குழு பணித்தளம்', healthSpace: 'உங்கள் உடல்நலப் பகுதி', welcomeBack: 'மீண்டும் வருக', carePrompt: 'உங்கள் உடல்நலத் தகவல்களை மருத்துவக் குழுவிற்குத் தயாராக வைத்திருங்கள்.', patientIdLabel: 'நோயாளர் எண்:', preVisitTab: '1. வருகைக்கு முன் தகவல்', postVisitTab: '2. வருகைக்குப் பின் அறிக்கைகள்', preVisitTitle: 'நீங்கள் எப்படி உணர்கிறீர்கள் என்பதைச் சொல்லுங்கள்', preVisitDescription: 'இந்தத் தகவல் இருதய மருத்துவக் குழு உங்கள் வருகைக்குத் தயாராக உதவும்.', optionalFields: 'அனைத்து விவரங்களும் விருப்பமானவை', age: 'வயது (ஆண்டுகள்)', temperature: 'வெப்பநிலை (°F)', weight: 'எடை (கிலோ)', systolic: 'இரத்த அழுத்தம் — மேல் எண்', diastolic: 'இரத்த அழுத்தம் — கீழ் எண்', medicines: 'தற்போதைய மருந்துகள்', medicinePlaceholder: 'மருந்துப் பெயர் மற்றும் அளவை எழுதவும்', savePreVisit: 'வருகைக்கு முந்தைய தகவலைச் சேமிக்கவும்', saveSuccess: 'உங்கள் தகவல் சேமிக்கப்பட்டது.', uploadTitle: 'ஸ்கேன் அல்லது அறிக்கையைப் பதிவேற்றவும்', uploadDescription: 'மருத்துவமனை வருகைக்குப் பிறகு PDF, படம் அல்லது ஆவணத்தைச் சேர்க்கவும்.', chooseFile: 'பதிவேற்ற கோப்பைத் தேர்ந்தெடுக்கவும்', supportedFiles: 'PDF, JPG, PNG அல்லது பிற அறிக்கை கோப்பு', uploadSuccess: 'உங்கள் அறிக்கை வெற்றிகரமாகப் பதிவேற்றப்பட்டது.', noReports: 'இதுவரை அறிக்கைகள் பதிவேற்றப்படவில்லை.', uploadedReport: 'பதிவேற்றிய அறிக்கை', loading: 'பாதுகாப்பான தளம் திறக்கிறது…', patientDirectory: 'நோயாளர் பட்டியல்', registeredPatients: 'பதிவு செய்த நோயாளிகள்', emptyPatients: 'நோயாளிகள் பதிவு செய்த பிறகு அவர்களின் விவரங்கள் இங்கே தோன்றும்.', selectPatient: 'நோயாளியைத் தேர்ந்தெடுக்கவும்', choosePatient: 'விவரங்களைக் காண பட்டியலிலிருந்து நோயாளியைத் தேர்ந்தெடுக்கவும்.', patientDetail: 'நோயாளர் விவரம்', phoneLabel: 'தொலைபேசி:', notProvided: 'வழங்கப்படவில்லை', lastUpdated: 'கடைசியாக புதுப்பிக்கப்பட்டது', readyReview: 'மதிப்பாய்வுக்குத் தயார்', latestReading: 'சமீபத்திய அளவீடு', listed: 'பட்டியலிடப்பட்டது', meds: 'மருந்துகள்', currentMedicines: 'தற்போதைய மருந்துகள்', reviewAtVisit: 'வருகையில் சரிபார்க்கவும்', noMedicines: 'மருந்துகள் எதுவும் பதிவு செய்யப்படவில்லை.', scansReports: 'ஸ்கேன்கள் மற்றும் அறிக்கைகள்', file: 'கோப்பு', files: 'கோப்புகள்', noScans: 'ஸ்கேன் அல்லது அறிக்கைகள் பதிவேற்றப்படவில்லை.', openPreview: 'முன்னோட்டத்தைத் திற ↗', bloodPressure: 'இரத்த அழுத்தம்', ageLabel: 'வயது', years: 'ஆண்டுகள்', chartsLabel: 'இரத்த அழுத்த வரைபடம்'
  },
  mr: {
    language: 'भाषा', english: 'English', hindi: 'हिन्दी', tamil: 'தமிழ்', marathi: 'मराठी', telugu: 'తెలుగు',
    subtitle: 'काळजी आणि निदान पोर्टल', patientLogin: 'रुग्ण लॉग इन', doctorLogin: 'डॉक्टर लॉग इन', fullName: 'पूर्ण नाव', enterName: 'तुमचे पूर्ण नाव लिहा', phone: 'फोन नंबर', password: 'पासवर्ड', enterPassword: 'तुमचा पासवर्ड लिहा', confirmPassword: 'पासवर्डची पुष्टी करा', reenterPassword: 'पासवर्ड पुन्हा लिहा', patientId: 'रुग्ण आयडी', doctorId: 'डॉक्टर नोंदणी आयडी', patientIdExample: 'उदा. CHH-000001', doctorIdExample: 'उदा. DOC-502', phoneExample: 'उदा. 9876543210', createAccount: 'रुग्ण खाते तयार करा', loginAsPatient: 'रुग्ण म्हणून लॉग इन करा', loginAsDoctor: 'डॉक्टर म्हणून लॉग इन करा', completeFields: 'कृपया साइन-अपमधील सर्व माहिती भरा.', passwordsMismatch: 'पासवर्ड जुळत नाहीत.', bothCredentials: 'कृपया आयडी आणि पासवर्ड दोन्ही भरा.', newPatient: 'नवीन रुग्ण आहात?', alreadyRegistered: 'आधीच नोंदणी केली आहे?', signupHere: 'येथे साइन अप करा', loginHere: 'येथे लॉग इन करा',
    patientPortal: 'रुग्ण पोर्टल', doctorPortal: 'डॉक्टर पोर्टल', signedInAs: 'लॉग इन:', patient: 'रुग्ण', doctor: 'डॉक्टर', logout: 'लॉग आउट', careWorkspace: 'वैद्यकीय पथक कार्यक्षेत्र', healthSpace: 'तुमचे आरोग्य क्षेत्र', welcomeBack: 'पुन्हा स्वागत आहे', carePrompt: 'तुमची आरोग्य माहिती वैद्यकीय पथकासाठी तयार ठेवा.', patientIdLabel: 'रुग्ण आयडी:', preVisitTab: '1. भेटीपूर्वीची माहिती', postVisitTab: '2. भेटीनंतरचे अहवाल', preVisitTitle: 'तुम्हाला कसे वाटत आहे ते सांगा', preVisitDescription: 'या माहितीमुळे हृदयरोग तज्ज्ञांना तुमच्या भेटीची तयारी करता येईल.', optionalFields: 'सर्व माहिती ऐच्छिक आहे', age: 'वय (वर्षे)', temperature: 'तापमान (°F)', weight: 'वजन (किलो)', systolic: 'रक्तदाब — वरचा आकडा', diastolic: 'रक्तदाब — खालचा आकडा', medicines: 'सध्याची औषधे', medicinePlaceholder: 'औषधांची नावे आणि मात्रा लिहा', savePreVisit: 'भेटीपूर्वीची माहिती जतन करा', saveSuccess: 'तुमची माहिती जतन केली आहे.', uploadTitle: 'स्कॅन किंवा अहवाल अपलोड करा', uploadDescription: 'रुग्णालय भेटीनंतर PDF, चित्र किंवा दस्तऐवज जोडा.', chooseFile: 'अपलोड करण्यासाठी फाइल निवडा', supportedFiles: 'PDF, JPG, PNG किंवा इतर अहवाल फाइल', uploadSuccess: 'तुमचा अहवाल यशस्वीपणे अपलोड झाला.', noReports: 'अद्याप कोणतेही अहवाल अपलोड केलेले नाहीत.', uploadedReport: 'अपलोड केलेला अहवाल', loading: 'तुमचे सुरक्षित पोर्टल उघडत आहे…', patientDirectory: 'रुग्ण यादी', registeredPatients: 'नोंदणीकृत रुग्ण', emptyPatients: 'रुग्णाने साइन अप केल्यानंतर त्यांची माहिती येथे दिसेल.', selectPatient: 'रुग्ण निवडा', choosePatient: 'तपशील पाहण्यासाठी यादीतून रुग्ण निवडा.', patientDetail: 'रुग्णाचा तपशील', phoneLabel: 'फोन:', notProvided: 'दिलेला नाही', lastUpdated: 'शेवटचे अपडेट', readyReview: 'तपासणीसाठी तयार', latestReading: 'अलीकडील मोजमाप', listed: 'नोंदवले', meds: 'औषधे', currentMedicines: 'सध्याची औषधे', reviewAtVisit: 'भेटीत तपासा', noMedicines: 'औषधांची नोंद नाही.', scansReports: 'स्कॅन आणि अहवाल', file: 'फाइल', files: 'फाइल्स', noScans: 'स्कॅन किंवा अहवाल अपलोड केलेले नाहीत.', openPreview: 'पूर्वावलोकन उघडा ↗', bloodPressure: 'रक्तदाब', ageLabel: 'वय', years: 'वर्षे', chartsLabel: 'रक्तदाब आलेख'
  },
  te: {
    language: 'భాష', english: 'English', hindi: 'हिन्दी', tamil: 'தமிழ்', marathi: 'मराठी', telugu: 'తెలుగు',
    subtitle: 'సంరక్షణ మరియు నిర్ధారణ పోర్టల్', patientLogin: 'రోగి లాగిన్', doctorLogin: 'వైద్యుడు లాగిన్', fullName: 'పూర్తి పేరు', enterName: 'మీ పూర్తి పేరును నమోదు చేయండి', phone: 'ఫోన్ నంబర్', password: 'పాస్‌వర్డ్', enterPassword: 'మీ పాస్‌వర్డ్‌ను నమోదు చేయండి', confirmPassword: 'పాస్‌వర్డ్‌ను నిర్ధారించండి', reenterPassword: 'పాస్‌వర్డ్‌ను మళ్లీ నమోదు చేయండి', patientId: 'రోగి ఐడి', doctorId: 'వైద్యుని నమోదు ఐడి', patientIdExample: 'ఉదా. CHH-000001', doctorIdExample: 'ఉదా. DOC-502', phoneExample: 'ఉదా. 9876543210', createAccount: 'రోగి ఖాతాను సృష్టించండి', loginAsPatient: 'రోగిగా లాగిన్ అవ్వండి', loginAsDoctor: 'వైద్యునిగా లాగిన్ అవ్వండి', completeFields: 'దయచేసి సైన్-అప్‌లోని అన్ని వివరాలను పూరించండి.', passwordsMismatch: 'పాస్‌వర్డ్‌లు సరిపోలలేదు.', bothCredentials: 'దయచేసి ఐడి మరియు పాస్‌వర్డ్ రెండింటినీ నమోదు చేయండి.', newPatient: 'కొత్త రోగినా?', alreadyRegistered: 'ఇప్పటికే నమోదు చేసుకున్నారా?', signupHere: 'ఇక్కడ సైన్ అప్ చేయండి', loginHere: 'ఇక్కడ లాగిన్ చేయండి',
    patientPortal: 'రోగి పోర్టల్', doctorPortal: 'వైద్యుని పోర్టల్', signedInAs: 'లాగిన్ అయినవారు:', patient: 'రోగి', doctor: 'వైద్యుడు', logout: 'లాగ్ అవుట్', careWorkspace: 'వైద్య బృంద కార్యస్థలం', healthSpace: 'మీ ఆరోగ్య స్థలం', welcomeBack: 'మళ్లీ స్వాగతం', carePrompt: 'మీ ఆరోగ్య సమాచారాన్ని వైద్య బృందం కోసం సిద్ధంగా ఉంచండి.', patientIdLabel: 'రోగి ఐడి:', preVisitTab: '1. సందర్శనకు ముందు సమాచారం', postVisitTab: '2. సందర్శన తర్వాత నివేదికలు', preVisitTitle: 'మీకు ఎలా అనిపిస్తుందో చెప్పండి', preVisitDescription: 'ఈ సమాచారం గుండె వైద్య బృందం మీ సందర్శనకు సిద్ధం కావడానికి సహాయపడుతుంది.', optionalFields: 'అన్ని వివరాలు ఐచ్ఛికం', age: 'వయస్సు (సంవత్సరాలు)', temperature: 'ఉష్ణోగ్రత (°F)', weight: 'బరువు (కిలోలు)', systolic: 'రక్తపోటు — పై సంఖ్య', diastolic: 'రక్తపోటు — కింది సంఖ్య', medicines: 'ప్రస్తుత మందులు', medicinePlaceholder: 'మందుల పేర్లు మరియు మోతాదులు రాయండి', savePreVisit: 'సందర్శనకు ముందు సమాచారాన్ని భద్రపరచండి', saveSuccess: 'మీ సమాచారం భద్రపరచబడింది.', uploadTitle: 'స్కాన్ లేదా నివేదికను అప్‌లోడ్ చేయండి', uploadDescription: 'ఆసుపత్రి సందర్శన తర్వాత PDF, చిత్రం లేదా పత్రాన్ని జోడించండి.', chooseFile: 'అప్‌లోడ్ చేయడానికి ఫైల్ ఎంచుకోండి', supportedFiles: 'PDF, JPG, PNG లేదా ఇతర నివేదిక ఫైల్', uploadSuccess: 'మీ నివేదిక విజయవంతంగా అప్‌లోడ్ అయింది.', noReports: 'ఇంకా నివేదికలు అప్‌లోడ్ కాలేదు.', uploadedReport: 'అప్‌లోడ్ చేసిన నివేదిక', loading: 'మీ సురక్షిత పోర్టల్ తెరుచుకుంటోంది…', patientDirectory: 'రోగుల జాబితా', registeredPatients: 'నమోదైన రోగులు', emptyPatients: 'రోగి సైన్ అప్ చేసిన తర్వాత వారి వివరాలు ఇక్కడ కనిపిస్తాయి.', selectPatient: 'రోగిని ఎంచుకోండి', choosePatient: 'వివరాలు చూడటానికి జాబితా నుండి రోగిని ఎంచుకోండి.', patientDetail: 'రోగి వివరాలు', phoneLabel: 'ఫోన్:', notProvided: 'ఇవ్వలేదు', lastUpdated: 'చివరిగా నవీకరించబడింది', readyReview: 'పరిశీలనకు సిద్ధం', latestReading: 'తాజా కొలత', listed: 'నమోదు చేయబడింది', meds: 'మందులు', currentMedicines: 'ప్రస్తుత మందులు', reviewAtVisit: 'సందర్శనలో పరిశీలించండి', noMedicines: 'మందులు నమోదు కాలేదు.', scansReports: 'స్కాన్లు మరియు నివేదికలు', file: 'ఫైల్', files: 'ఫైళ్లు', noScans: 'స్కాన్లు లేదా నివేదికలు అప్‌లోడ్ కాలేదు.', openPreview: 'ప్రివ్యూ తెరవండి ↗', bloodPressure: 'రక్తపోటు', ageLabel: 'వయస్సు', years: 'సంవత్సరాలు', chartsLabel: 'రక్తపోటు ట్రెండ్ చార్ట్'
  }
};

export const LANGUAGE_OPTIONS = [
  { code: 'en', key: 'english' },
  { code: 'hi', key: 'hindi' },
  { code: 'ta', key: 'tamil' },
  { code: 'mr', key: 'marathi' },
  { code: 'te', key: 'telugu' },
];

const recommendationTranslations = {
  en: {
    doctorRecommendations: 'Doctor recommendations',
    recommendationsDescription: 'Checkup plans and advice from your doctor.',
    noRecommendations: 'Your doctor has not sent any recommendations yet.',
    sentOn: 'Sent on',
    recommendedCheckup: 'Recommended checkup',
    doctorsAdvice: "Doctor's advice",
    followUpDate: 'Follow-up date',
    recommendationComposeDescription: 'Send a checkup plan and advice to',
    checkupPlaceholder: 'e.g. Cardiology follow-up and ECG',
    advicePlaceholder: 'Write clear next steps for the patient',
    sendRecommendation: 'Send recommendation to patient',
    recommendationSent: 'Recommendation sent to the patient.',
    reportTooLarge: 'Please choose a file smaller than 6 MB.',
    uploadFailed: 'The file could not be read. Please try again.',
  },
  hi: {
    doctorRecommendations: 'डॉक्टर की सलाह',
    recommendationsDescription: 'डॉक्टर से जाँच योजना और सलाह।',
    noRecommendations: 'डॉक्टर ने अभी कोई सलाह नहीं भेजी है।',
    sentOn: 'भेजने की तारीख',
    recommendedCheckup: 'सुझाई गई जाँच',
    doctorsAdvice: 'डॉक्टर की सलाह',
    followUpDate: 'अगली मुलाक़ात की तारीख',
    recommendationComposeDescription: 'जाँच योजना और सलाह भेजें:',
    checkupPlaceholder: 'जैसे हृदय जाँच और ईसीजी',
    advicePlaceholder: 'मरीज़ के लिए अगले कदम लिखें',
    sendRecommendation: 'मरीज़ को सलाह भेजें',
    recommendationSent: 'मरीज़ को सलाह भेज दी गई है।',
    reportTooLarge: 'कृपया 6 MB से छोटी फ़ाइल चुनें।',
    uploadFailed: 'फ़ाइल पढ़ी नहीं जा सकी। कृपया फिर से कोशिश करें।',
  },
  ta: {
    doctorRecommendations: 'மருத்துவர் பரிந்துரைகள்',
    recommendationsDescription: 'மருத்துவரின் பரிசோதனை திட்டமும் ஆலோசனையும்.',
    noRecommendations: 'மருத்துவர் இன்னும் பரிந்துரைகளை அனுப்பவில்லை.',
    sentOn: 'அனுப்பிய தேதி',
    recommendedCheckup: 'பரிந்துரைக்கப்பட்ட பரிசோதனை',
    doctorsAdvice: 'மருத்துவரின் ஆலோசனை',
    followUpDate: 'தொடர் சந்திப்பு தேதி',
    recommendationComposeDescription: 'பரிசோதனை திட்டம் மற்றும் ஆலோசனையை அனுப்பவும்:',
    checkupPlaceholder: 'எ.கா. இதய பரிசோதனை மற்றும் ECG',
    advicePlaceholder: 'நோயாளிக்கான அடுத்த படிகளை எழுதவும்',
    sendRecommendation: 'நோயாளிக்கு பரிந்துரையை அனுப்பவும்',
    recommendationSent: 'நோயாளிக்கு பரிந்துரை அனுப்பப்பட்டது.',
    reportTooLarge: '6 MB-க்கு குறைவான கோப்பைத் தேர்ந்தெடுக்கவும்.',
    uploadFailed: 'கோப்பைப் படிக்க முடியவில்லை. மீண்டும் முயற்சிக்கவும்.',
  },
  mr: {
    doctorRecommendations: 'डॉक्टरांच्या शिफारसी',
    recommendationsDescription: 'डॉक्टरांकडून तपासणी योजना आणि सल्ला.',
    noRecommendations: 'डॉक्टरांनी अद्याप कोणतीही शिफारस पाठवलेली नाही.',
    sentOn: 'पाठवण्याची तारीख',
    recommendedCheckup: 'सुचवलेली तपासणी',
    doctorsAdvice: 'डॉक्टरांचा सल्ला',
    followUpDate: 'पुढील भेटीची तारीख',
    recommendationComposeDescription: 'तपासणी योजना आणि सल्ला पाठवा:',
    checkupPlaceholder: 'उदा. हृदय तपासणी आणि ECG',
    advicePlaceholder: 'रुग्णासाठी पुढील सूचना लिहा',
    sendRecommendation: 'रुग्णाला शिफारस पाठवा',
    recommendationSent: 'रुग्णाला शिफारस पाठवली आहे.',
    reportTooLarge: 'कृपया 6 MB पेक्षा लहान फाइल निवडा.',
    uploadFailed: 'फाइल वाचता आली नाही. कृपया पुन्हा प्रयत्न करा.',
  },
  te: {
    doctorRecommendations: 'వైద్యుని సిఫార్సులు',
    recommendationsDescription: 'వైద్యుని పరీక్షా ప్రణాళిక మరియు సలహా.',
    noRecommendations: 'వైద్యుడు ఇంకా సిఫార్సులు పంపలేదు.',
    sentOn: 'పంపిన తేదీ',
    recommendedCheckup: 'సిఫార్సు చేసిన పరీక్ష',
    doctorsAdvice: 'వైద్యుని సలహా',
    followUpDate: 'తదుపరి సందర్శన తేదీ',
    recommendationComposeDescription: 'పరీక్షా ప్రణాళిక మరియు సలహాను పంపండి:',
    checkupPlaceholder: 'ఉదా. గుండె పరీక్ష మరియు ECG',
    advicePlaceholder: 'రోగి కోసం తదుపరి సూచనలు రాయండి',
    sendRecommendation: 'రోగికి సిఫార్సు పంపండి',
    recommendationSent: 'రోగికి సిఫార్సు పంపబడింది.',
    reportTooLarge: 'దయచేసి 6 MB కంటే చిన్న ఫైల్‌ను ఎంచుకోండి.',
    uploadFailed: 'ఫైల్ చదవలేకపోయాం. మళ్లీ ప్రయత్నించండి.',
  },
};

export function t(language, key) {
  return recommendationTranslations[language]?.[key] || translations[language]?.[key] || recommendationTranslations.en[key] || translations.en[key] || key;
}

export function LanguageSelect({ language, onChange }) {
  return (
    <label className="language-select">
      <span>{t(language, 'language')}</span>
      <select aria-label={t(language, 'language')} value={language} onChange={(event) => onChange(event.target.value)}>
        {LANGUAGE_OPTIONS.map(({ code, key }) => <option value={code} key={code}>{t(language, key)}</option>)}
      </select>
    </label>
  );
}
