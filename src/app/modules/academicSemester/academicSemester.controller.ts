import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import httpStatus from 'http-status';
import { AcademicSemesterServices } from './academicSemester.service';

const createAcademicSemester = catchAsync(async (req, res) => {

  
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester is created succesfully',
    data: result,
  });
});

export const AcademicSemesterControllers = {
    createAcademicSemester,
};
