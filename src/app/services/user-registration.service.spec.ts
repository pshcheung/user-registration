import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe('UserRegistrationService', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    })

    httpMock = TestBed.inject(HttpTestingController);
  })

  it('should be created', () => {
    expect(httpMock).toBeTruthy();
  })
})
