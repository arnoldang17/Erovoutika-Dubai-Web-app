import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
);

const training_data = {
    Hero: {
        title: "BE PART OF THE<br><span class='underline'>FUTURE!</span>",
        subtitle: "Join us for an International Training & Tournament Camp!",
        background: "https://zrwokrbdolhwjwabonwk.supabase.co/storage/v1/object/public/training-section//Trainings.png",
        buttonText: "Learn More"
      },

      Introduction: {
        title: "Get Better Everyday In",
        subtitle: "Robolution Dubai 2025 challenges you to grow in robotics, automation, and cybersecurity. By competing, learning, and networking with experts worldwide, you'll enhance your technical skills, problem-solving abilities, and innovation mindset—preparing you for future success!"
      },

      Content_1: {
        title: "Robotics & Automation",
        subtitle: "Erovoutika provides hands-on training, certifications, and competitions, equipping students, educators, and professionals with cutting-edge skills in robotics and automation systems.",
        ImageDirectory: "https://zrwokrbdolhwjwabonwk.supabase.co/storage/v1/object/public/training-section//erobot.png"
      },

      Content_2: {
        title: "Cybersecurity",
        subtitle: "Erovoutika promotes cybersecurity education and training by integrating network security, ethical hacking, and data protection into its programs. Through hands-on workshops, certifications, and competitions, participants gain expertise in threat detection, encryption, and cybersecurity best practices.",
        ImageDirectory: "https://zrwokrbdolhwjwabonwk.supabase.co/storage/v1/object/public/training-section//cybersecurity.png"
      },

      Content_3: {
        title: "Research & Development",
        subtitle: "Erovoutika is dedicated to advancing innovation through Research & Development (R&D), with a strong emphasis on robotics, automation, cybersecurity, and AI-powered solutions. Additionally, it explores technical writing for journal publications and patenting, fostering knowledge sharing and technological advancements.",
        ImageDirectory: "https://zrwokrbdolhwjwabonwk.supabase.co/storage/v1/object/public/training-section//rnd.png"
      },

      Content_4: {
        title: "Join Us",
        minititle: "START BUILDING IDEAS",
        subtitle: "Be part of Robolution Dubai 2025, a global event uniting innovators from multiple countries in robotics, automation, and cybersecurity. Connect, compete, and collaborate with a diverse international community!",
        buttonText: "Register Now"
      }
}

async function publishTrainingData() {
    const { data, error } = await supabase
        .from('Trainings')
        .insert([{
            hero: training_data.Hero,
            introduction: training_data.Introduction,
            content_1: training_data.Content_1, 
            content_2: training_data.Content_2,  
            content_3: training_data.Content_3,  
            content_4: training_data.Content_4,  
        }]);

    if (error) {
        console.error("Error inserting data:", error);
    } else {
        console.log("Successfully inserted training content", data);
    }
}

publishTrainingData();