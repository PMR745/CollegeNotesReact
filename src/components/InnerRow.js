import React from 'react'
import { Element } from './Element'

export const InnerRow = (props) => {

    const dbms1 = ["Introduction to DBMS - DBMS Architecture", "Data Models", "E-R Diagram", "Relational Database Design"];

    const dbms2 = ["SQL Concepts - Basics of SQL", "DDL, DML, DCL", "structure – creation, alteration, defining constraints", "Functions - aggregate functions", "Built-in functions –numeric, date, string functions", "set operations", "sub-queries", "correlated sub-queries", "Use of group by, having, order by", "join and its types, Exist, Any, All ", "view and its types."]

    const dbms3 = ["Functional Dependency (FD) – Basic concepts", "closure of set of FD", "closure of attribute set", "Decomposition", "Normalization – 1NF, 2NF, 3NF, BCNF, 4NF", "Query Optimization",]

    const dbms4 = ["Transaction control commands – Commit", "Rollback", "Save point. Transaction Management: Transaction concepts", "properties of transactions", "serializability of transactions", "Two- Phase Commit protocol", "Deadlock", "two-phase locking protocol.  Cursors", "Stored Procedures", "Stored Function", "Database Triggers.",]

    const dbms5 = ["NoSQL Databases - Introduction", "CRUD Operations", "Data Mining", "Advances in databases",]

    const wd1 = ["Page design", "Home Page Layout Design Concept.", "Brief History of Internet", "What is World Wide Web", "Why create a web site", "Web Standards"]

    const wd2 = ["What is HTML", "HTML Documents", "Basic structure of an HTML document", "Creating an HTML document", "Mark up Tags", "Heading-Paragraphs", "Line Breaks", "HTML Tags."]

    const wd3 = ["Introduction to elements of HTML", "Working with Text", "Working with Lists", "Tables and Frames", "Working with Hyperlinks", "Images and Multimedia", "Working with Forms and controls"]

    const wd4 = ["Concept of CSS", "Creating Style Sheet", "CSS Properties", "CSS Styling(Background, Text Format, Controlling Fonts)", "Working with block elements and objects", "Working with Lists and Tables", "CSS Id and Class", "Box Model", "Advanced CSS", "JavaScript Introduction", "Application", "Advantages", "Popup Boxes", "Programming details", "Class & object"]

    const wd5 = ["Creating the Web Site", "Saving the site", "Working on the web site", "Creating web site structure", "Creating Titles for web pages", "Themes-Publishing web sites."]

    const sepm1 = ["Introduction to Software Engineering", "Software Process", "Perspective and Specialized Process Models – Software Project Management: Estimation – LOC and FP Based Estimation", "COCOMO Model – Project Scheduling – Scheduling", "Earned Value Analysis – Risk Management.",]

    const sepm2 = ["Software Requirements: Functional and Non-Functional", "User requirements", "System requirements", "Software Requirements Document – Requirement Engineering Process: Feasibility Studies", "Requirements elicitation and analysis", "requirements validation", "requirements management-Classical analysis: Structured system Analysis", "Petri Nets- Data Dictionary.",]

    const sepm3 = ["Design process – Design Concepts- Design Model– Design Heuristic – Architectural Design – Architectural styles", "Architectural Design", "Architectural Mapping using Data Flow- User Interface Design: Interface analysis", "Interface Design –Component level Design: Designing Class based components", "traditional Components."]
    const sepm4 = ["Software testing fundamentals - Internal and external views of Testing", "White Box testing", "basis path testing", "control structure testing", "Black box testing", "Regression Testing", "Unite Testing", "Integration Testing", "Validation Testing", "System Testing and Debugging", "Software Implementation Techniques: Coding pratices- Refactoring"]
    const sepm5 = ["Estimation - FP based, LOC based", "Make/Buy Decision", "COCOMO II - Planning, Project Plan", "RFP Risk Management - Identification, Projection, RMMM", "Scheduling and Tracking", "Relationship between people and effort, Task Set & Network, Scheduling", "EVA – Process and Project Metrics", "Introduction of Recent trends in software engineering such as Agile methodology ,scrum, pair programming"]

    const cd1 = ["Overview of compiler and translator", "types of Compiler", "Analysis of the Source Program", "The Phases of a compiler", "grouping of phases", "Cousins of the Compiler", "design of lexical Analysis", "compiler writing tools", "Cross compiler- bootstrapping  Brief introduction of other system software like Assembler", "linker", "loader",]

    const cd2 = ["Review of Context-Free Grammars – Derivation trees and Parse Trees", "Ambiguity. Top-Down Parsing: Recursive Descent parsing", "Predictive parsing", "LL(1) Grammars. Bottom-Up Parsing: Shift Reduce parsing – Operator precedence parsing (Concepts only)LR parsing – Constructing SLR parsing tables", "Constructing", "Canonical LR parsing tables and Constructing LALR parsing tables. ",]

    const cd3 = ["Need of semantic analysis", "Abstract Parse trees for Expressions", "variables", "statements", "functions and class declarations", "Syntax directed definitions", "Syntax directed translation schemes for declaration processing", "type analysis", "scope analysis", "Symbol Tables (ST)", "Organization of ST for block structure and non block structured languages", "Symbol Table management",]

    const cd4 = ["Intermediate code generation: Intermediate languages", "Design issues", "Translation of different language features", "different types of intermediate forms", "Error Handling and Recovery in Syntax Analyzer", "YACC-Design of a syntax Analyzer for a Sample Language.",]

    const cd5 = ["Principal Sources of Optimization-DAG- Optimization of Basic Blocks-Global Data Flow Analysis-Efficient Data Flow Algorithms-Issues in Design of a Code Generator - A Simple Code Generator Algorithm. Recent trends and Compiler tools", "advanced topics & its Application. Virtual Machines and Interpretation Techniques", "Just-In-Time (JIT) and Adaptive Compilation."]

    const cc1 = ["Overview", "Applications", "Intranets and the Cloud. Your Organization and Cloud Computing- Benefits", "Limitations", "Security Concerns.  Software as a Service (SaaS)- Understanding the Multitenant Nature of SaaS Solutions", "Understanding SOA.   Platform as a Service (PaaS)-IT Evolution Leading to the Cloud", "Benefits of Paas Solutions", "Disadvantages of PaaS Solutions.  Infrastructure as a Service (IaaS)-Understanding IaaS", "Improving Performance through Load Balancing", "System and Storage Redundancy", "Utilizing Cloud-Based NAS Devices", "Advantages", "Server Types. Identity as a Service (IDaaS)"]

    const cc2 = ["Introduction", "Characteristics of Virtualized environments", "Taxonomy of Virtualization techniques", "Pros and Cons of Virtualization", "Technology examples: Xen", "KVM", "Vmware", "Microsoft Hyper-V"]

    const cc3 = ["Cloud ﬁle systems: GFS and HDFS", "BigTable", "HBase and Dynamo Cloud data stores: Datastore and Simple DB Gautam Shrauf", "Cloud Storage-Overview", "Cloud Storage Providers. [Anthony T. Velte]3 Securing the Cloud- General Security Advantages of Cloud-Based Solutions", "Introducing Business Continuity and Disaster Recovery. Disaster Recovery- Understanding the Threats"]

    const cc4 = ["Infrastructure as Service", "best-of breed cloud infrastructure components", "cloud ready converged infrastructure", "Virtual machine provisioning and migration services", "Anatomy of Cloud infrastructure", "Distributed management of virtual infrastructure", "scheduling techniques", "SLA Commitment"]

    const cc5 = ["Introduction and architecture for federated cloud computing", "Performance prediction for HPC on Cloud. SLA management: Types of SLA", "Life cycle of SLA", "Traditional approaches of SLA. Management responsibilities", "lifecycle management", "cloud management products", "Cloud management standards",]

    if (props.page === 0) {
        return (
            <Element element="First" />
        )
    }
    else if (props.page === 1) {
        if (props.subjectName === "DBMS") {
            switch (props.unitName) {
                case "Unit-1":
                    return (
                        <>
                            {
                                dbms1.map(topic => (<Element element={topic} key={topic} />))
                            }
                        </>
                    )
                case "Unit-2":
                    return (
                        <>
                            {
                                dbms2.map(topic => (<Element element={topic} key={topic} />))
                            }
                        </>
                    )
                case "Unit-3":
                    return (
                        <>
                            {
                                dbms3.map(topic => (<Element element={topic} key={topic} />))
                            }
                        </>
                    )
                case "Unit-4":
                    return (
                        <>
                            {
                                dbms4.map(topic => (<Element element={topic} key={topic} />))
                            }
                        </>
                    )
                case "Unit-5":
                    return (
                        <>
                            {
                                dbms5.map(topic => (<Element element={topic} key={topic} />))
                            }
                        </>
                    )
            }
        }
        else if (props.subjectName === "Web Development") {
            switch (props.unitName) {
                case "Unit-1":
                    return (
                        <>
                            {
                                wd1.map(topic => (<Element element={topic} key={topic} />))
                            }
                        </>
                    )
                case "Unit-2":
                    return (
                        <>
                            {
                                wd2.map(topic => (<Element element={topic} key={topic} />))
                            }
                        </>
                    )
                case "Unit-3":
                    return (
                        <>
                            {
                                wd3.map(topic => (<Element element={topic} key={topic} />))
                            }
                        </>
                    )
                case "Unit-4":
                    return (
                        <>
                            {
                                wd4.map(topic => (<Element element={topic} key={topic} />))
                            }
                        </>
                    )
                case "Unit-5":
                    return (
                        <>
                            {
                                wd5.map(topic => (<Element element={topic} key={topic} />))
                            }
                        </>
                    )
            }
        }
        else if (props.subjectName === "SEPM") {
            switch (props.unitName) {
                case "Unit-1":
                    return (
                        <>
                            {
                                sepm1.map(topic => (<Element element={topic} key={topic} />))
                            }
                        </>
                    )
                case "Unit-2":
                    return (
                        <>
                            {
                                sepm2.map(topic => (<Element element={topic} key={topic} />))
                            }
                        </>
                    )
                case "Unit-3":
                    return (
                        <>
                            {
                                sepm3.map(topic => (<Element element={topic} key={topic} />))
                            }
                        </>
                    )
                case "Unit-4":
                    return (
                        <>
                            {
                                sepm4.map(topic => (<Element element={topic} key={topic} />))
                            }
                        </>
                    )
                case "Unit-5":
                    return (
                        <>
                            {
                                sepm5.map(topic => (<Element element={topic} key={topic} />))
                            }
                        </>
                    )
            }
        }
        else if (props.subjectName === "Cloud Computing") {
            switch (props.unitName) {
                case "Unit-1":
                    return (
                        <>
                            {
                                cc1.map(topic => (<Element element={topic} key={topic} />))
                            }
                        </>
                    )
                case "Unit-2":
                    return (
                        <>
                            {
                                cc2.map(topic => (<Element element={topic} key={topic} />))
                            }
                        </>
                    )
                case "Unit-3":
                    return (
                        <>
                            {
                                cc3.map(topic => (<Element element={topic} key={topic} />))
                            }
                        </>
                    )
                case "Unit-4":
                    return (
                        <>
                            {
                                cc4.map(topic => (<Element element={topic} key={topic} />))
                            }
                        </>
                    )
                case "Unit-5":
                    return (
                        <>
                            {
                                cc5.map(topic => (<Element element={topic} key={topic} />))
                            }
                        </>
                    )
            }
        }
        else if (props.subjectName === "Compiler Design") {
            switch (props.unitName) {
                case "Unit-1":
                    return (
                        <>
                            {
                                cd1.map(topic => (<Element element={topic} key={topic} />))
                            }
                        </>
                    )
                case "Unit-2":
                    return (
                        <>
                            {
                                cd2.map(topic => (<Element element={topic} key={topic} />))
                            }
                        </>
                    )
                case "Unit-3":
                    return (
                        <>
                            {
                                cd3.map(topic => (<Element element={topic} key={topic} />))
                            }
                        </>
                    )
                case "Unit-4":
                    return (
                        <>
                            {
                                cd4.map(topic => (<Element element={topic} key={topic} />))
                            }
                        </>
                    )
                case "Unit-5":
                    return (
                        <>
                            {
                                cd5.map(topic => (<Element element={topic} key={topic} />))
                            }
                        </>
                    )
            }
        }
    }
    else if (props.page === 2) {
        return (
            <Element element="Comming Soon" />
        )
    }
}
