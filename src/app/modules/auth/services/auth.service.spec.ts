import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import * as mockRaw from '../../../data/users.json'
import { AuthService } from './auth.service';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let mockUsers:any = (mockRaw as any).default
  let HttpClientSpy: { post: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    HttpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
    service = new AuthService(HttpClientSpy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  // Unit test
  it('should return an object with "data" or "tokenSession"', (done: DoneFn) => {
    const user:any = mockUsers.userOk
    const mockResponse = {
      data:{},
      tokenSession: "0x0x0x"
    }
    HttpClientSpy.post.and.returnValue(
      of(mockResponse)
    )

    service.sendCredentials(user.email, user.password)
    .subscribe(responseApi => {
      const getProperties = Object.keys(responseApi)
      expect(getProperties).toContain('data')
      expect(getProperties).toContain('tokenSession')
      done()
    })
  });

});
