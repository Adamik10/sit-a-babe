import { FilterLocationPipe } from './filter-location.pipe';
import { TestBed, async } from "@angular/core/testing";

describe('App: FilterLocationPipe', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FilterLocationPipe
      ],
    });
  });

  let sitters = [
    {
      birth_date: "1994-10-09T23:00:00.000Z",
      children: "not specified",
      deleted: false,
      email: "adam@example.com",
      id: "_3n80zncya",
      introduction: "This user has not filled out this field yet.",
      location: "Copenhagen",
      name: "Adam",
      occupation: "admin of this thingie thingie muhaha",
      password: "Password1234",
      picture_location: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/4753f6db-5482-4e42-9668-305f94eadaca/dbk62v1-ba0e3793-2883-42fe-b70e-99207699489c.png/v1/fill/w_878,h_910,q_70,strp/joseph_christiansen__dream_daddy__by_shuploc_dbk62v1-pre.jpg",
      surname: "Antal",
      user_type: "admin"
    },
    {
      birth_date: "1994-10-09T23:00:00.000Z",
      children: "none",
      deleted: false,
      email: "saska@example.com",
      id: "_xn2jzdseq",
      introduction: "This user has not filled out this field yet.",
      location: "Copenhagen",
      name: "Saska",
      occupation: "sitter",
      password: "Password1234",
      picture_location: "https://images.8tracks.com/cover/i/012/229/005/tumblr_ou46w3rKQy1w0sr57o1_r4_1280-7548.png?rect=0,0,819,819&q=98&fm=jpg&fit=max",
      surname: "Labusova",
      user_type: "sitter"
    },
    {
      birth_date: "1995-10-09T23:00:00.000Z",
      children: "not specified",
      deleted: false,
      email: "katka@example.com",
      id: "_anr7633o9",
      introduction: "This user has not filled out this field yet.",
      location: "Makarska",
      name: "Katka",
      occupation: "Daddy",
      password: "Password1234",
      picture_location: "src/assets/img/users/daddy_default.PNG",
      surname: "Kuk",
      user_type: "parent"
    },
    {
      birth_date: "1990-10-09T23:00:00.000Z",
      children: "not specified",
      deleted: false,
      email: "ferdo@example.com",
      id: "_qko7yof6y",
      introduction: "This user has not filled out this field yet.",
      location: "Hamburg",
      name: "Ferdo",
      occupation: "daddy",
      password: "Password1234",
      picture_location: "https://media-mercury.cursecdn.com/attachments/6/792/dream-dad4.png",
      surname: "Hummel",
      user_type: "parent"
    },
    {
      birth_date: "1971-10-09T23:00:00.000Z",
      children: "none",
      deleted: false,
      email: "luyi@example.com",
      id: "_66cad6os8",
      introduction: "This user has not filled out this field yet.",
      location: "Copenhagen",
      name: "Luyi",
      occupation: "babysitter",
      password: "Password1234",
      picture_location: "src/assets/img/users/sitter_default.PNG",
      surname: "DeGeneres",
      user_type: "sitter"
    }
  ];

  it('1.0: Searching for copenhagen should give me three results (lowercase searching + complete)', () => {
    let filter = new FilterLocationPipe();

    let sittersList = sitters

    let result = filter.transform(sittersList, 'copenhagen', 'location'); 
    expect(result.length).toBe(3);
    expect(result[0].name).toBe('Adam');
  });

  it("1.1: Searching for cop should give me three results (lowercase searching + incomplete)", () => {
    let filter = new FilterLocationPipe();

    let sittersList = sitters;

    let result = filter.transform(sittersList, "cop", "location");
    expect(result.length).toBe(3);
    expect(result[0].name).toBe("Adam");
  });

  it("1.2: Searching for COPENHAGEN should give me three result (uppercase searching + complete)", () => {
    let filter = new FilterLocationPipe();

    let sittersList = sitters;

    let result = filter.transform(sittersList, "COPENHAGEN", "location");
    expect(result.length).toBe(3);
    expect(result[0].name).toBe("Adam");
  });

  it("1.3: Searching for COPE should give me three result (location uppercase searching + incomplete)", () => {
    let filter = new FilterLocationPipe();

    let sittersList = sitters;

    let result = filter.transform(sittersList, "COPE", "location");
    expect(result.length).toBe(3);
    expect(result[0].name).toBe("Adam");
  });

  it("1.4: Searching for daddy should give me two results (occupation lowercase searching + complete)", () => {
    let filter = new FilterLocationPipe();

    let sittersList = sitters;

    let result = filter.transform(sittersList, "daddy", "occupation");
    expect(result.length).toBe(2);
    expect(result[0].name).toBe("Katka");
  });

  it("1.5: Searching for ddy should give me two results (occupation lowercase searching + incomplete random)", () => {
    let filter = new FilterLocationPipe();

    let sittersList = sitters;

    let result = filter.transform(sittersList, "ddy", "occupation");
    expect(result.length).toBe(2);
    expect(result[0].name).toBe("Katka");
  });

  it("1.6: Searching for '' (empty string) should give me the orignal array (no filtering)", () => {
    let filter = new FilterLocationPipe();

    let sittersList = sitters;

    let result = filter.transform(sittersList, "", "occupation");
    expect(result.length).toBe(5);
    expect(result[0].name).toBe("Adam");
  });

  it("2.0: Test with no dataset (empty array), searching for 'daddy' in occipation", () => {
    let filter = new FilterLocationPipe();

    let sittersList = [];

    let result = filter.transform(sittersList, "daddy", "occupation");
    expect(result).toBe(sittersList);
  });

  it("2.1: Passing empty string as a dataset, searching for daddy in occupation", () => {
    let filter = new FilterLocationPipe();

    let sittersList = '';

    let result = filter.transform(sittersList, "daddy", "occupation");
    expect(result).toBe(sittersList);
  });

  it("2.2: Passing empty string as a dataset, searching for daddy in occupation", () => {
    let filter = new FilterLocationPipe();

    let sittersList = sitters;

    let result = filter.transform(sittersList, "daddy", "");
    expect(result).toEqual([]);
  });

});

// Valid data:
// 1.0: Searching for copenhagen should give me three results (location lowercase searching + complete)
// 1.1: Searching for cop should give me three results (location lowercase searching + incomplete)
// 1.2: Searching for COPENHAGEN should give me three result (location uppercase searching + complete)
// 1.3: Searching for COPE should give me three result (location uppercase searching + incomplete)

// 1.4: Searching for copenhagen should give me three results (location lowercase searching + complete)
// 1.5: Searching for ddy should give me two results (occupation lowercase searching + incomplete random)

// 1.6: Searching for '' (empty string) should give me the orignal array (no filtering)

// Invalid data:
// 2.0: Test with no dataset (empty array), searching for 'daddy' in occupation
// 2.1: Passing empty string as a dataset, searching for daddy in occupation
// 2.2: Passing empty string as a filter name, searching for daddy