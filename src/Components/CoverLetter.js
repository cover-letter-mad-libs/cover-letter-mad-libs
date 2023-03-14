

export default function CoverLetter({companyName, adjective, jobPosition, place}) {
    return (
        <p>Dear {companyName},

        I am {adjective} to apply for the position of {jobPosition}, as advertised on {place}. 
        Although my work experience may not be directly related to this industry, 
        I am {adjective} in my ability to excel in this role, 
        given my {adjective} principles and dedication to {adjective} business practices.
        </p>
    )
}