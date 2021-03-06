/*
  Copyright 2014 Google Inc.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

#ifndef GOOPY_BASE_FILE_BASE_PATHS_MAC_H_
#define GOOPY_BASE_FILE_BASE_PATHS_MAC_H_
#pragma once

// This file declares Mac-specific path keys for the base module.
// These can be used with the PathService to access various special
// directories and files.

namespace base {

enum {
  PATH_MAC_START = 200,

  DIR_APP_DATA,  // ~/Library/Application Support

  PATH_MAC_END
};

}  // namespace base

#endif  // GOOPY_BASE_FILE_BASE_PATHS_MAC_H_
