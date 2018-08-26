import { BrowserModule            } from '@angular/platform-browser';
import { FormsModule              } from '@angular/forms';
import { NgModule                 } from '@angular/core';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { MatCheckboxModule        } from '@angular/material';
import { MatButtonModule          } from '@angular/material';
import { MatInputModule           } from '@angular/material/input';
import { MatAutocompleteModule    } from '@angular/material/autocomplete';
import { MatDatepickerModule      } from '@angular/material/datepicker';
import { MatNativeDateModule      } from '@angular/material';
import { MatFormFieldModule       } from '@angular/material/form-field';
import { MatRadioModule           } from '@angular/material/radio';
import { MatSelectModule          } from '@angular/material/select';
import { MatSliderModule          } from '@angular/material/slider';
import { MatSlideToggleModule     } from '@angular/material/slide-toggle';
import { MatMenuModule            } from '@angular/material/menu';
import { MatSidenavModule         } from '@angular/material/sidenav';
import { MatToolbarModule         } from '@angular/material/toolbar';
import { MatListModule            } from '@angular/material/list';
import { MatGridListModule        } from '@angular/material/grid-list';
import { MatCardModule            } from '@angular/material/card';
import { MatStepperModule         } from '@angular/material/stepper';
import { MatTabsModule            } from '@angular/material/tabs';
import { MatExpansionModule       } from '@angular/material/expansion';
import { MatButtonToggleModule    } from '@angular/material/button-toggle';
import { MatChipsModule           } from '@angular/material/chips';
import { MatIconModule            } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule     } from '@angular/material/progress-bar';
import { MatDialogModule          } from '@angular/material/dialog';
import { MatTooltipModule         } from '@angular/material/tooltip';
import { MatSnackBarModule        } from '@angular/material/snack-bar';
import { MatTableModule           } from '@angular/material/table';
import { MatSortModule            } from '@angular/material/sort';
import { MatPaginatorModule       } from '@angular/material/paginator';
import { AppComponent             } from './app.component'; 
import { FlexLayoutModule         } from '@angular/flex-layout';
import { SelectDayComponent } from './select-day/select-day.component';
import { AdminComponent, DialogAvailabilityDialog } from './admin/admin.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent, SelectDayComponent, AdminComponent, DialogAvailabilityDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent, DialogAvailabilityDialog]
})
export class AppModule { }
