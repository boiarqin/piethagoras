import { GetServerSideProps } from 'next'
import BackOfHouse from "../../layouts/back-of-house";
import { useGetEmployeeByIdQuery } from "../../redux/services/employees";
import { isFetchBaseQueryError } from "../../redux/services/helpers";
import sectionStyles from '../../styles/components/Sections.module.css';

interface Props {
    employeeId: number
}

const EmployeeDetail = ({employeeId} : Props) => {
    const { data: employeesData, error: employeesError, isLoading: isEmployeesLoading } = useGetEmployeeByIdQuery(employeeId)
    const {
        id,
        firstName,
        lastName,
        jobTitle,
        schedule
    } = employeesData || {};

    return (
        <BackOfHouse>

            {isEmployeesLoading && <>...Loading</>}

            {employeesError && isFetchBaseQueryError(employeesError) && <>Error: {employeesError.data}</>}

            {employeesData && (
                <>
                    <h1>Employee Detail: {firstName} {lastName}</h1>
                    <section className={`${sectionStyles.section}`}>
                        <div className={sectionStyles.interior}>
                            <p><strong>First Name: </strong> {firstName}</p>
                            <p><strong>Last Name: </strong> {lastName}</p>
                            <p><strong>Job Title: </strong> {jobTitle}</p>
                            <p><strong>Employee ID: </strong> {id}</p>
                            <p><strong>Schedule: </strong> {schedule.join(',').toString()}</p>
                        </div>
                    </section>
                    <section className={`${sectionStyles.section}`}>
                        <div className={sectionStyles.interior}>
                            <h2>Notes and Observations</h2>
                            <p>Hand tossed labore spinach sausage marinara ad cillum veniam non laborum elit. Party cupidatat ex proident philly steak bacon personal bbq rib eiusmod garlic parmesan. Enim steak in, bbq rib laboris party hawaiian mushrooms consequat. Officia veniam tempor, nulla meatball hand tossed mozzarella aliquip pariatur proident. Onions pepperoni mayo, excepteur deserunt incididunt lasagna elit anim ex quis sauteed onions bbq sauce black olives. String cheese bianca ut occaecat do eu bbq rib steak extra sauce meat lovers eiusmod philly chicken non excepteur deep crust. Sausage qui adipisicing esse white garlic.</p>
                            <p>Extra cheese duis ricotta chicken and bacon dolore NY style. Pineapple adipisicing eiusmod, bbq sauce broccoli extra cheese est tempor. Anchovies buffalo sauce enim ranch beef, nostrud id in party fugiat magna eiusmod labore burnt mouth. Thin crust burnt mouth cillum, consectetur mollit mayo meat lovers.</p>
                        </div>
                    </section>
                </>
            )}

        </BackOfHouse>
    )
}

export default EmployeeDetail;

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    return {
      props: {
        // props for your component
        // workaround for nextjs router not being immediately available
        employeeId: parseInt(context.query.id.toString()),
      },
    };
  }