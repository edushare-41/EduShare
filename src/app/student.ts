import {Subjects} from './subjects'

export interface Student {
  id:number;
  name: string;
  school: string;
  subjects:Subjects[];
}
