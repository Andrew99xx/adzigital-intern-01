 const countryOptions = [
    { value: 'afghanistan', label: 'Afghanistan' },
    { value: 'albania', label: 'Albania' },
    { value: 'algeria', label: 'Algeria' },
    { value: 'andorra', label: 'Andorra' },
    { value: 'angola', label: 'Angola' },
    { value: 'antigua-and-barbuda', label: 'Antigua and Barbuda' },
    { value: 'argentina', label: 'Argentina' },
    { value: 'armenia', label: 'Armenia' },
    { value: 'australia', label: 'Australia' },
    { value: 'austria', label: 'Austria' },
    { value: 'azerbaijan', label: 'Azerbaijan' },


    { value: 'bahamas', label: 'Bahamas' },
    { value: 'bahrain', label: 'Bahrain' },
    { value: 'bangladesh', label: 'Bangladesh' },
    { value: 'barbados', label: 'Barbados' },
    { value: 'belarus', label: 'Belarus' },
    { value: 'belgium', label: 'Belgium' },
    { value: 'belize', label: 'Belize' },
    { value: 'benin', label: 'Benin' },
    { value: 'bhutan', label: 'Bhutan' },
    { value: 'bolivia', label: 'Bolivia' },
    { value: 'bosnia-and-herzegovina', label: 'Bosnia and Herzegovina' },
    { value: 'botswana', label: 'Botswana' },
    { value: 'brazil', label: 'Brazil' },
    { value: 'brunei', label: 'Brunei' },
    { value: 'bulgaria', label: 'Bulgaria' },
    { value: 'burkina-faso', label: 'Burkina Faso' },
    { value: 'burundi', label: 'Burundi' },



    { value: 'cabo-verde', label: 'Cabo Verde' },
    { value: 'cambodia', label: 'Cambodia' },
    { value: 'cameroon', label: 'Cameroon' },
    { value: 'canada', label: 'Canada' },
    { value: 'central-african-republic', label: 'Central African Republic' },
    { value: 'chad', label: 'Chad' },
    { value: 'chile', label: 'Chile' },
    { value: 'china', label: 'China' },
    { value: 'colombia', label: 'Colombia' },
    { value: 'comoros', label: 'Comoros' },
    { value: 'congo', label: 'Congo' },
    { value: 'costa-rica', label: 'Costa Rica' },
    { value: 'croatia', label: 'Croatia' },
    { value: 'cuba', label: 'Cuba' },
    { value: 'cyprus', label: 'Cyprus' },
    { value: 'czech-republic', label: 'Czech Republic' },



    { value: 'denmark', label: 'Denmark' },
    { value: 'djibouti', label: 'Djibouti' },
    { value: 'dominica', label: 'Dominica' },
    { value: 'dominican-republic', label: 'Dominican Republic' },


    { value: 'east-timor', label: 'East Timor' },
    { value: 'ecuador', label: 'Ecuador' },
    { value: 'egypt', label: 'Egypt' },
    { value: 'el-salvador', label: 'El Salvador' },
    { value: 'equatorial-guinea', label: 'Equatorial Guinea' },
    { value: 'eritrea', label: 'Eritrea' },
    { value: 'estonia', label: 'Estonia' },
    { value: 'eswatini', label: 'Eswatini' },
    { value: 'ethiopia', label: 'Ethiopia' },


    { value: 'fiji', label: 'Fiji' },
    { value: 'finland', label: 'Finland' },
    { value: 'france', label: 'France' },


    { value: 'gabon', label: 'Gabon' },
    { value: 'gambia', label: 'Gambia' },
    { value: 'georgia', label: 'Georgia' },
    { value: 'germany', label: 'Germany' },
    { value: 'ghana', label: 'Ghana' },
    { value: 'greece', label: 'Greece' },
    { value: 'grenada', label: 'Grenada' },
    { value: 'guatemala', label: 'Guatemala' },
    { value: 'guinea', label: 'Guinea' },
    { value: 'guinea-bissau', label: 'Guinea-Bissau' },
    { value: 'guyana', label: 'Guyana' },


    { value: 'haiti', label: 'Haiti' },
    { value: 'honduras', label: 'Honduras' },
    { value: 'hungary', label: 'Hungary' },


    { value: 'iceland', label: 'Iceland' },
    { value: 'india', label: 'India' },
    { value: 'indonesia', label: 'Indonesia' },
    { value: 'iran', label: 'Iran' },
    { value: 'iraq', label: 'Iraq' },
    { value: 'ireland', label: 'Ireland' },
    { value: 'israel', label: 'Israel' },
    { value: 'italy', label: 'Italy' },


    { value: 'jamaica', label: 'Jamaica' },
    { value: 'japan', label: 'Japan' },
    { value: 'jordan', label: 'Jordan' },


    { value: 'kazakhstan', label: 'Kazakhstan' },
    { value: 'kenya', label: 'Kenya' },
    { value: 'kiribati', label: 'Kiribati' },
    { value: 'korea-north', label: 'North Korea' },
    { value: 'korea-south', label: 'South Korea' },
    { value: 'kosovo', label: 'Kosovo' },
    { value: 'kuwait', label: 'Kuwait' },
    { value: 'kyrgyzstan', label: 'Kyrgyzstan' },


    { value: 'laos', label: 'Laos' },
    { value: 'latvia', label: 'Latvia' },
    { value: 'lebanon', label: 'Lebanon' },
    { value: 'lesotho', label: 'Lesotho' },
    { value: 'liberia', label: 'Liberia' },
    { value: 'libya', label: 'Libya' },
    { value: 'liechtenstein', label: 'Liechtenstein' },
    { value: 'lithuania', label: 'Lithuania' },
    { value: 'luxembourg', label: 'Luxembourg' },


    { value: 'madagascar', label: 'Madagascar' },
    { value: 'malawi', label: 'Malawi' },
    { value: 'malaysia', label: 'Malaysia' },
    { value: 'maldives', label: 'Maldives' },
    { value: 'mali', label: 'Mali' },
    { value: 'malta', label: 'Malta' },
    { value: 'marshall-islands', label: 'Marshall Islands' },
    { value: 'mauritania', label: 'Mauritania' },
    { value: 'mauritius', label: 'Mauritius' },
    { value: 'mexico', label: 'Mexico' },
    { value: 'micronesia', label: 'Micronesia' },
    { value: 'moldova', label: 'Moldova' },
    { value: 'monaco', label: 'Monaco' },
    { value: 'mongolia', label: 'Mongolia' },
    { value: 'montenegro', label: 'Montenegro' },
    { value: 'morocco', label: 'Morocco' },
    { value: 'mozambique', label: 'Mozambique' },
    { value: 'myanmar', label: 'Myanmar' },

    
    { value: 'namibia', label: 'Namibia' },
    { value: 'nauru', label: 'Nauru' },
    { value: 'nepal', label: 'Nepal' },
    { value: 'netherlands', label: 'Netherlands' },
    { value: 'new-zealand', label: 'New Zealand' },
    { value: 'nicaragua', label: 'Nicaragua' },
    { value: 'niger', label: 'Niger' },
    { value: 'nigeria', label: 'Nigeria' },
    { value: 'north-macedonia', label: 'North Macedonia' },
    { value: 'norway', label: 'Norway' },
  ];

  
  export default countryOptions