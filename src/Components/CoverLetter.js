export default function CoverLetter({companyName, adjective, jobPosition, place, noun, name}) {
    const renderAnVersusA = (word='') => 'aeiou'.split('').includes(word[0]) ? 'n' : ''
    return (
        <div>
            <p>
                Dear {companyName},

                I am {adjective[0]} to apply for the position of {jobPosition[0]}, as advertised on {place}. 
                Although my work experience may not be directly related to this industry, 
                I am {adjective[1]} in my ability to excel in this role, 
                given my {adjective[2]} principles and dedication to {adjective[3]} business practices.
            </p>
            <p>
                As a{renderAnVersusA(jobPosition[1])} {jobPosition[1]}, I have learned the importance of {adjective[4]} {noun[0]}, {adjective[5]} {noun[1]}, and {adjective[6]} {noun[2]}. I understand the value of developing {adjective[7]} relationships with customers, and I believe that these skills are {adjective[8]} to the international {noun[3]} industry.
            </p>
            <p>
                I am {adjective[9]} to learn new skills and take on new challenges. I believe that my {adjective[10]} work ethic, {adjective[11]} attention to detail, and dedication to {adjective[12]}  make me a{renderAnVersusA(adjective[13])} {adjective[13]} candidate for this position.
            </p>
            <p>
                Thank you for considering my application. I look forward to the opportunity to discuss my qualifications further.
            </p>
            <p>
                Sincerely, <br/>
                {name}
            </p>
        </div>
        
    )
}