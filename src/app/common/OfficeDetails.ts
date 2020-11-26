import {Doctor} from './doctor';
import {Contact} from './contact';
import {Address} from './address';

export interface OfficeDetails {
  doctor: Doctor;
  contact: Contact;
  address: Address;
  price: number;
  startWorkAt: string;
  finishWorkAt: string;
  oneVisitDuration: number;
}
