export interface County {
  id: number;
  name: string;
  region: string;
  coordinator: string;
  phone: string;
  members: number;
  established: number;
}

export const COUNTIES: County[] = [
  { id: 47, name: "Nairobi", region: "Nairobi", coordinator: "James Kariuki", phone: "+254 700 123 001", members: 8420, established: 1994 },
  { id: 1, name: "Mombasa", region: "Coast", coordinator: "Fatuma Ali", phone: "+254 700 123 002", members: 3210, established: 1998 },
  { id: 42, name: "Kisumu", region: "Nyanza", coordinator: "Otieno Ouma", phone: "+254 700 123 003", members: 2980, established: 1998 },
  { id: 32, name: "Nakuru", region: "Rift Valley", coordinator: "Mary Njeri", phone: "+254 700 123 004", members: 2750, established: 1999 },
  { id: 27, name: "Uasin Gishu", region: "Rift Valley", coordinator: "David Ruto", phone: "+254 700 123 005", members: 2540, established: 2000 },
  { id: 22, name: "Kiambu", region: "Central", coordinator: "Grace Kamau", phone: "+254 700 123 006", members: 2310, established: 1999 },
  { id: 16, name: "Machakos", region: "Eastern", coordinator: "Peter Mutua", phone: "+254 700 123 007", members: 1980, established: 2002 },
  { id: 12, name: "Meru", region: "Eastern", coordinator: "Agnes Gitonga", phone: "+254 700 123 008", members: 1870, established: 2002 },
  { id: 21, name: "Nyeri", region: "Central", coordinator: "Joseph Waweru", phone: "+254 700 123 009", members: 1650, established: 2003 },
  { id: 37, name: "Kakamega", region: "Western", coordinator: "Rose Namwamba", phone: "+254 700 123 010", members: 2100, established: 2001 },
  { id: 39, name: "Bungoma", region: "Western", coordinator: "Francis Wekesa", phone: "+254 700 123 011", members: 1540, established: 2004 },
  { id: 45, name: "Kisii", region: "Nyanza", coordinator: "Nancy Ondari", phone: "+254 700 123 012", members: 1420, established: 2004 },
  { id: 15, name: "Kitui", region: "Eastern", coordinator: "John Muthui", phone: "+254 700 123 013", members: 1210, established: 2005 },
  { id: 7, name: "Garissa", region: "North Eastern", coordinator: "Hassan Abdi", phone: "+254 700 123 014", members: 890, established: 2008 },
  { id: 3, name: "Kwale", region: "Coast", coordinator: "Amina Mwachiro", phone: "+254 700 123 015", members: 980, established: 2006 },
  { id: 3, name: "Kilifi", region: "Coast", coordinator: "Thomas Karisa", phone: "+254 700 123 016", members: 870, established: 2007 },
  { id: 4, name: "Tana River", region: "Coast", coordinator: "Ibrahim Adan", phone: "+254 700 123 017", members: 560, established: 2010 },
  { id: 5, name: "Lamu", region: "Coast", coordinator: "Zainab Mwangi", phone: "+254 700 123 018", members: 420, established: 2011 },
  { id: 6, name: "Taita Taveta", region: "Coast", coordinator: "Samuel Mwakio", phone: "+254 700 123 019", members: 640, established: 2009 },
  { id: 34, name: "Kajiado", region: "Rift Valley", coordinator: "Joseph Lerionka", phone: "+254 700 123 020", members: 1100, established: 2005 },
  { id: 17, name: "Makueni", region: "Eastern", coordinator: "Beatrice Mutua", phone: "+254 700 123 021", members: 980, established: 2006 },
  { id: 30, name: "Nyandarua", region: "Central", coordinator: "Lucy Wanjiku", phone: "+254 700 123 022", members: 870, established: 2007 },
  { id: 31, name: "Laikipia", region: "Central", coordinator: "Mark Lekakeny", phone: "+254 700 123 023", members: 760, established: 2008 },
  { id: 25, name: "Samburu", region: "Rift Valley", coordinator: "Elizabeth Leruso", phone: "+254 700 123 024", members: 480, established: 2012 },
  { id: 26, name: "Trans Nzoia", region: "Rift Valley", coordinator: "Peter Kiptoo", phone: "+254 700 123 025", members: 1050, established: 2006 },
  { id: 24, name: "West Pokot", region: "Rift Valley", coordinator: "Christine Talaam", phone: "+254 700 123 026", members: 560, established: 2011 },
  { id: 41, name: "Siaya", region: "Nyanza", coordinator: "Collins Otieno", phone: "+254 700 123 027", members: 1100, established: 2005 },
  { id: 43, name: "Homa Bay", region: "Nyanza", coordinator: "Faith Achieng", phone: "+254 700 123 028", members: 1050, established: 2006 },
  { id: 44, name: "Migori", region: "Nyanza", coordinator: "Daniel Osoro", phone: "+254 700 123 029", members: 980, established: 2007 },
  { id: 35, name: "Kericho", region: "Rift Valley", coordinator: "Charles Langat", phone: "+254 700 123 030", members: 870, established: 2008 },
  { id: 36, name: "Bomet", region: "Rift Valley", coordinator: "Ann Chesang", phone: "+254 700 123 031", members: 760, established: 2009 },
  { id: 38, name: "Vihiga", region: "Western", coordinator: "Albert Awino", phone: "+254 700 123 032", members: 890, established: 2007 },
  { id: 40, name: "Busia", region: "Western", coordinator: "Eunice Oduya", phone: "+254 700 123 033", members: 820, established: 2008 },
  { id: 11, name: "Isiolo", region: "Eastern", coordinator: "Abdi Wako", phone: "+254 700 123 034", members: 480, established: 2013 },
  { id: 10, name: "Marsabit", region: "Eastern", coordinator: "Mamo Godhana", phone: "+254 700 123 035", members: 420, established: 2014 },
  { id: 9, name: "Mandera", region: "North Eastern", coordinator: "Ali Ibrahim", phone: "+254 700 123 036", members: 380, established: 2015 },
  { id: 8, name: "Wajir", region: "North Eastern", coordinator: "Fatuma Duale", phone: "+254 700 123 037", members: 350, established: 2015 },
  { id: 23, name: "Turkana", region: "Rift Valley", coordinator: "Emmanuel Ekal", phone: "+254 700 123 038", members: 420, established: 2014 },
  { id: 30, name: "Baringo", region: "Rift Valley", coordinator: "Kipchoge Boit", phone: "+254 700 123 039", members: 760, established: 2009 },
  { id: 28, name: "Elgeyo Marakwet", region: "Rift Valley", coordinator: "Joyce Talaam", phone: "+254 700 123 040", members: 680, established: 2010 },
  { id: 29, name: "Nandi", region: "Rift Valley", coordinator: "Kiprop Sang", phone: "+254 700 123 041", members: 870, established: 2008 },
  { id: 33, name: "Narok", region: "Rift Valley", coordinator: "Seline Ntimama", phone: "+254 700 123 042", members: 760, established: 2009 },
  { id: 14, name: "Embu", region: "Eastern", coordinator: "Patricia Kimemia", phone: "+254 700 123 043", members: 980, established: 2006 },
  { id: 13, name: "Tharaka Nithi", region: "Eastern", coordinator: "Benard Muriungi", phone: "+254 700 123 044", members: 760, established: 2009 },
  { id: 20, name: "Kirinyaga", region: "Central", coordinator: "Florence Njoki", phone: "+254 700 123 045", members: 870, established: 2008 },
  { id: 21, name: "Murang'a", region: "Central", coordinator: "Stephen Njoroge", phone: "+254 700 123 046", members: 980, established: 2007 },
  { id: 46, name: "Nyamira", region: "Nyanza", coordinator: "Hillary Nyaribo", phone: "+254 700 123 047", members: 760, established: 2009 },
];

export const KENYAN_COUNTIES_LIST = COUNTIES.map(c => c.name).sort();
