

export default function CoverLetter({companyName, adjective, jobPosition, place}) {
    return (
        <p>Dear {companyName},

        I am {adjective[0]} to apply for the position of {jobPosition}, as advertised on {place}. 
        Although my work experience may not be directly related to this industry, 
        I am {adjective[1]} in my ability to excel in this role, 
        given my {adjective[2]} principles and dedication to {adjective[3]} business practices.
        </p>
    )
}