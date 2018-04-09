import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../../router.animations';

import { ResumeService } from './resume.service';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss'],
    animations: [routerTransition()]
})
export class ResumeComponent implements OnInit {
    constructor(private resumeService: ResumeService) { }

    isEditMode = false;

    ngOnInit() { }

    get() {
        this.resumeService.getProfile().subscribe(p => console.log(p));
        // this.profileService.getProfile2().subscribe(p => console.log(p));
        // this.profileService.getProfile3().subscribe(p => console.log(p));
        console.log('get')
    }
    save() {
        // console.log('save');
        // this.profileService.updateProfile(this.profile);
        
        this.resumeService.updateProfile(this.profile).subscribe(p => console.log(p));
        console.log('save')
    }

    addkeySkill(keySkill:any) {

    }

    addDetailsosSkill(detailofSkill:any) {

    }

    // profile = {
    //     "userId":"12345",
    //     "firstName":"Joung Hee",
    //     "lastName": "Park",
    //     "job": "Senior Software Developer",
    //     "mobile": "0435-726-717",
    //     "emailAddress": "parkzh22@gmail.com",
    //     "homeAddress": "Wishart 4122, Australia",
    
    //     "keySkills": [
    //         {
    //             "skillName": "Full Stack Java Development (6+ years)",
    //             "details": [
    //                 "Spring framework (Spring Core, BOOT, JDBC etc)",
    //                 "Web application (Spring MVC, RESTful/JSON,XML, JAXB)",
    //                 "Front-end (HTML, Bootstrap, Angular 2+, Adobe flex)",
    //                 "Database (Oracle, MS SQL, SQLite etc.)",
    //                 "Stand-alone application as well"
    //             ]
    //         },
    //         {
    //             "skillName": ".Net",
    //             "details": [
    //                 "Client",
    //                 "Server"
    //             ]
    //         }
    //     ]
    // }

    profile = {
        userId:'12346',
        firstName:'Joung Hee',
        lastName: 'Park',
        job: 'Senior Software Developer',
        mobile: '0435-726-717',
        emailAddress: 'parkzh22@gmail.com',
        homeAddress: '7 Fair Street, Wishart 4122, Australia',

        keySkills: [
            {
                skillName: 'Full Stack Java Development (6+ years)',
                details: [
                    'Spring framework (Spring Core, BOOT, JDBC etc)',
                    'Web application (Spring MVC, RESTful/JSON,XML, JAXB)',
                    'Front-end (HTML, Bootstrap, Angular 2+, Adobe flex)',
                    'Database (Oracle, MS SQL, SQLite etc.)',
                    'Stand-alone application as well'
                ]
            },
            {
                skillName: '.Net',
                details: [
                    'Client',
                    'Server'
                ]
            }
        ],
        experiences: [
            {
                company: 'Samsung Electronics',
                from: 'Jan 2002',
                to: 'May 2002',
                projects: [
                    {
                        name:'Cause analytics automation system',
                        from:'Jan 2017',
                        to:'May 2017',
                        role:'TechLead, Analytics Developer',
                        technique:'Java 8, Spring framework(Core, BOOT, WEB, JPA) , RESTful API, JSON, HTML5, Bootstrap, Angular2, Oracle 12c',
                        achievements: [
                            'Developing web application for knowledge management (defining real cause and noises)',
                            'Architecting knowledge database',
                            'Designing recommendation system finding root cause of machine trouble using machine learning algorithm'
                        ]
                    },
                    {
                        name:'Engineer Knowledge system',
                        from:'Jan 2016',
                        to:'May 2017',
                        role:'  Analytics Developer',
                        technique:'Java 8, Spring framework(Core, BOOT, WEB, JPA) , RESTful API, JSON, Oracle 12c, Elastic-Search, N-Gram, National Language Processing, Test clustering, Text classification',
                        achievements: [
                            'Developed indexing algorithm based Elastic-search with N-gram analyzer for html/ppt documents written by Korean',
                            'Architected custom dictionary such as domain entity, thesaurus, named entity, abbreviation, misspelled word and foreign word',
                            'Developed document Indexer, lexical analyzer, context analyzer for Korean',
                            'Developed text-mining algorithm (key-word auto completion, document cluster/classification module, document structure recognition)',
                            'Developing solution recommendation system for question using analyzing natural sentence, extracting and auto-generating sentence.'
                        ]
                    }
                ]
            }
        ],
        educations: [
            {
                name:'Hanyang University',
                degree: 'Bachelor of Science(B.Sc.)',
                from: 'Mar 1995',
                to: 'Feb 2002',
                major: 'Electronics and Computer Science Engineering'
            }
        ],
        referees: [
            {
                name:'Alex Oh',
                role:'Senior .Net Developer',
                mobile:'0481-345-456',
                email:'dolgorae@naver.com'
            }
        ]
    }
}
